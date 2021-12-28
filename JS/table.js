function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table-content");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sortTable(property) {
    var table, rows, switching, i, x, y, shouldSwitch, column;
    table = document.getElementById("table-content");
    switching = true;
    if (property === 0) {
        column = 2
        document.getElementById("dropdownbtn").innerText = 'Sort by: Best match'
    } else {
        column = 3
        document.getElementById("dropdownbtn").innerText = 'Sort by: Price (high to low)'
    }
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 2); i = i + 2) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[column];
            y = rows[i + 2].getElementsByTagName("TD")[column];
            if (property === 1 && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                document.getElementById("dropdownbtn").innerText = 'Sort by: Price (low to high)'
                break;
            } else if ((property === 0 || property === 2) && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 2], rows[i]);
            rows[i + 1].parentNode.insertBefore(rows[i + 3], rows[i + 1]);
            switching = true;
        }
    }
}

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showHideRow(row) {
    var result_style = document.getElementById(row).style;
    if (result_style.display === '') {
        result_style.display = 'none'
    } else {
        result_style.display = '';
    }
}

function getSpecifications(data) {
    let spec = ''
    for (let [key, value] of Object.entries(data.specifications)) {
        spec += `<p style="margin: 1rem">${key}: ${value}</p>`
    }
    return spec
}

function fillOther() {
    document.getElementById("pc2d").remove();
    let table = "<tbody id='tbody'>";
    table += "</tbody>";
    document.getElementById("table-content").innerHTML += table;
}

function fillTable(name) {
    if (name !== "Other") {
        let data = all[name]

        console.log(data)
        let table = "<tbody id='tbody'>";
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === chosen[name]) {
                table += `<tr id="row_${i}" style="border: 2px solid #460097;">`
            } else {
                table += `<tr id="row_${i}">`
            }
            table += `<td><div class="click-zoom">
                        <label>
                        <input type="checkbox">
                        <img class="product-image" src="../IMG/${name}/${data[i].name}.jpeg" alt="">
                        </label>
                    </div>
  
                        </td>
                  <td>${data[i].name}
                  <button class="info-button"  onclick="showHideRow('hidden_row${i}');">i</button>
                  </td>
                  <td>${data[i].rating}</td>
                  <td>€ ${data[i].price}</td>`;
            if (data[i].name === chosen[name]) {
                table += `<td><button class="add-button" id="add-button-${i}" style="background-color: black; color: white;" ">ADDED</button></td>`
            } else {
                table += `<td><button class="add-button" id="add-button-${i}" onclick="add('${name}','${data[i].name}','${data[i].price}', '${i}', '${data.length}')">ADD</button></td>`
            }
            table += `</tr>
                <tr id="hidden_row${i}" style="display:none;">
                <td colspan="5">${getSpecifications(data[i])}</td>
                </tr>`;
        }
        table += "</tbody>";
        document.getElementById("table-content").innerHTML += table;
    } else {
        fillOther();
    }
}

function add(key, value, price, i, n) {
    for (let j = 0; j < n; j++) {
        if (j == i) {
            document.getElementById("row_" + j).style.border = "2px solid #460097";
            document.getElementById("add-button-" + j).innerText = "ADDED"
            document.getElementById("add-button-" + j).style = "background-color: black; color: white;";
        } else {
            document.getElementById("row_" + j).style.border = "none";
            document.getElementById("add-button-" + j).innerText = "ADD"
            document.getElementById("add-button-" + j).style = "none";
        }
    }
    chosen[key] = {value, price}
    console.log(chosen)
}


let all = {
    "Video card": [
        {
            "name": "EVGA XC GAMING",
            "specifications": {
                "Chipset": "GeForce RTX 3060",
                "Memory": "12 GB",
                "Core Clock": "1320 MHz",
                "Boost clock": "1882 MHz"
            },
            "rating": 4.8,
            "price": 915.99
        },
        {
            "name": "EVGA SC ULTRA GAMING",
            "specifications": {
                "Chipset": "GeForce GTX 1650 G6",
                "Memory": "4 GB",
                "Core Clock": "1410 MHz",
                "Boost clock": "1710 MHz"
            },
            "rating": 4.3,
            "price": 488
        },
        {
            "name": "MSI GAMING X",
            "specifications": {
                "Chipset": "GeForce RTX 3070",
                "Memory": "8 GB",
                "Core Clock": "1500 MHz",
                "Boost clock": "1770 MHz"
            },
            "rating": 4.7,
            "price": 1369
        },
        {
            "name": "EVGA FTW3 ULTRA GAMING",
            "specifications": {
                "Chipset": "GeForce RTX 3080 Ti",
                "Memory": "12 GB",
                "Core Clock": "1365 MHz",
                "Boost clock": "1800 MHz"
            },
            "rating": 4.6,
            "price": 1959
        },
        {
            "name": "EVGA KO ULTRA GAMING",
            "specifications": {
                "Chipset": "GeForce RTX 3090",
                "Memory": "24 GB",
                "Core Clock": "1395 MHz",
                "Boost clock": "1725 MHz"
            },
            "rating": 5,
            "price": 2458
        },
        {
            "name": "SAPPHIRE TOXIC",
            "specifications": {
                "Chipset": "Radeon RX 6900",
                "Memory": "16 GB",
                "Core Clock": "1950 MHz",
                "Boost clock": "2365 MHz"
            },
            "rating": 4,
            "price": 1879
        },
        {
            "name": "MSI GTX 1050 Ti 4GT OC",
            "specifications": {
                "Chipset": "Radeon RX 5500",
                "Memory": "8 GB",
                "Core Clock": "1685 MHz",
                "Boost clock": "1845 MHz"
            },
            "rating": 4.5,
            "price": 259
        },
        {
            "name": "GIGABYTE XC GAMING",
            "specifications": {
                "Chipset": "Radeon RX 6700",
                "Memory": "12 GB",
                "Core Clock": "2321 MHz",
                "Boost clock": "2622 MHz"
            },
            "rating": 4.7,
            "price": 1056
        },
        {
            "name": "GIGABYTE AORUS ELITE",
            "specifications": {
                "Chipset": "RRadeon RX 6900",
                "Memory": "16 GB",
                "Core Clock": "1825 MHz",
                "Boost clock": "2365 MHz"
            },
            "rating": 4.8,
            "price": 1773
        },
        {
            "name": "ASROCK Challenger D",
            "specifications": {
                "Chipset": "Radeon RX 6700",
                "Memory": "12 GB",
                "Core Clock": "2375 MHz",
                "Boost clock": "2620 MHz"
            },
            "rating": 4.8,
            "price": 1311
        }
    ],
    "Processor": [
        {
            "name": "AMD Ryzen 5 5600X",
            "specifications": {
                "core count": 6,
                "Performance Core Clock": "3.7 GHz",
                "Performance Boost Clock": "4.6 GHz",
                "TDP": "65 W"
            },
            "rating": 4.6,
            "price": 289
        },
        {
            "name": "AMD Ryzen 7 5800X",
            "specifications": {
                "core count": 8,
                "Performance Core Clock": "3.8 GHz",
                "Performance Boost Clock": "4.7 GHz",
                "TDP": "105 W"
            },
            "rating": 4.7,
            "price": 341.66
        },
        {
            "name": "AMD Ryzen 5 3600",
            "specifications": {
                "core count": 6,
                "Performance Core Clock": "3.6 GHz",
                "Performance Boost Clock": "4.2 GHz",
                "TDP": "65 W"
            },
            "rating": 4.6,
            "price": 241.99
        },
        {
            "name": "AMD Ryzen 7 3800X",
            "specifications": {
                "core count": 8,
                "Performance Core Clock": "3.9 GHz",
                "Performance Boost Clock": "4.5 GHz",
                "TDP": "105 W"
            },
            "rating": 4.9,
            "price": 300.90
        },
        {
            "name": "AMD Ryzen 9 5950X",
            "specifications": {
                "core count": 16,
                "Performance Core Clock": "3.4 GHz",
                "Performance Boost Clock": "4.9 GHz",
                "TDP": "105 W"
            },
            "rating": 4.7,
            "price": 844.90
        },
        {
            "name": "Intel Core i5-12600K",
            "specifications": {
                "core count": 10,
                "Performance Core Clock": "3.7 GHz",
                "Performance Boost Clock": "4.9 GHz",
                "TDP": "150 W"
            },
            "rating": 4.8,
            "price": 350.90
        },
        {
            "name": "Intel Core i7-12700K",
            "specifications": {
                "core count": 12,
                "Performance Core Clock": "3.6 GHz",
                "Performance Boost Clock": "5 GHz",
                "TDP": "190 W"
            },
            "rating": 4.7,
            "price": 506.90
        },
        {
            "name": "Intel Core i9-12900K",
            "specifications": {
                "core count": 16,
                "Performance Core Clock": "3.2 GHz",
                "Performance Boost Clock": "5.2 GHz",
                "TDP": "241 W"
            },
            "rating": 4.2,
            "price": 701.90
        },
        {
            "name": "Intel Core i5-10600KF",
            "specifications": {
                "core count": 6,
                "Performance Core Clock": "4.1 GHz",
                "Performance Boost Clock": "4.8 GHz",
                "TDP": "125 W"
            },
            "rating": 5,
            "price": 195.90
        },
        {
            "name": "Intel Core i7-11700KF",
            "specifications": {
                "core count": 8,
                "Performance Core Clock": "3.6 GHz",
                "Performance Boost Clock": "5 GHz",
                "TDP": "125 W"
            },
            "rating": 4.4,
            "price": 369.90
        }
    ],
    "Motherboard": [
        {
            "name": "ASUS TUF GAMING B550M-PLUS",
            "specifications": {
                "Socket": " AMD AM4",
                "Chipset": "AMD B550",
                "Memory": "DDR4",
                "RAM Slots": "4",
                "Maximum frequency": "4800 MHz",
                "External inputs": "DisplayPort, HDMI, Jack, PS/2, RJ-45 (LAN) 2.5Gbps, S/PDIF, USB 2.0, USB 3.2 Gen 1, USB 3.2 Gen 2, USB-C",
                "Internal inputs": "ARGB LED Header, COM header, M.2 Socket, RGB LED Header, Serial ATA III, TPM header, USB 2.0 header, USB 3.2 Gen 1 header",
                "M.2": "2",
                "USB 2.0": "2",
                "USB 3.2 Gen 1 (USB 3.0)": "4",
                "USB 3.1 (3.1 gen2)": "2",
                "Serial ATA III": "4",
                "PCI Express x16": "2",
                "PCI Express x1": "1"
            },
            "rating": 4.6,
            "price": 123.95
        },
        {
            "name": "ASUS ROG STRIX X570-F GAMING",
            "specifications": {
                "Socket": " AMD AM4",
                "Chipset": " AMD X570",
                "Memory": "DDR4",
                "RAM Slots": "4",
                "Maximum frequency": "3600 MHz",
                "External inputs": " DisplayPort, HDMI, Jack, RJ-45 (LAN) 2.5Gbps, S/PDIF, USB 3.2 Gen 1 (USB 3.0), USB 3.2 Gen 2, USB-C",
                "Internal inputs": "ARGB LED Header, M.2 Socket, RGB LED Header, Serial ATA III, TPM header, USB 2.0 header, USB 3.2 Gen 1 header, USB-C 3.2 Gen 2 header",
                "M.2": "2",
                "USB 3.2 Gen 1 (USB 3.0)": "4",
                "USB 3.1 (3.1 gen2)": "4",
                "Serial ATA III": "8",
                "PCI Express x16": "3",
                "PCI Express x1": "2"
            },
            "rating": 4.8,
            "price": 217.95
        },
        {
            "name": "ASUS ROG CROSSHAIR VIII DARK HERO",
            "specifications": {
                "Socket": " AMD AM4",
                "Chipset": " AMD X570",
                "Memory": "DDR4",
                "RAM Slots": "4",
                "Maximum frequency": "4866 MHz",
                "External inputs": "  Jack, RJ-45 (LAN) 1Gbps, RJ-45 (LAN) 2.5Gbps, S/PDIF, USB 3.2 Gen 1, USB 3.2 Gen 2, USB-C",
                "Internal inputs": "ARGB LED Header, M.2 Socket, RGB LED Header, Serial ATA III, TPM header, USB 2.0 header, USB 3.2 Gen 1 header, USB-C 3.2 Gen 2 header",
                "M.2": "2",
                "USB 3.2 Gen 1 (USB 3.0)": "4",
                "USB 3.1 (3.1 gen2)": "8",
                "Serial ATA III": "8",
                "PCI Express x16": "3",
                "PCI Express x1": "1"
            },
            "rating": 5,
            "price": 471
        },
        {
            "name": "MSI B450-A PRO MAX",
            "specifications": {
                "Socket": " AMD AM4",
                "Chipset": "AMD B450",
                "Memory": "DDR4",
                "RAM Slots": "4",
                "Maximum frequency": "4133 MHz",
                "External inputs": "DVI, HDMI, Jack, PS/2, RJ-45 (LAN) 1Gbps, USB 2.0, USB 3.2 Gen 1 (USB 3.0), USB 3.2 Gen 2, VGA (D-Sub)",
                "Internal inputs": "COM header, LPT header, M.2 Socket, RGB LED Header, Serial ATA III, TPM header, USB 2.0 header, USB 3.2 Gen 1 header",
                "M.2": "1",
                "USB 2.0": "2",
                "USB 3.2 Gen 1 (USB 3.0)": "2",
                "USB 3.1 (3.1 gen2)": "2",
                "Serial ATA III": "6",
                "PCI Express x16": "2",
                "PCI Express x1": "4"
            },
            "rating": 4.9,
            "price": 68.50
        },
        {
            "name": "GIGABYTE A520 AORUS ELITE",
            "specifications": {
                "Socket": " AMD AM4",
                "Chipset": "AMD A520",
                "Memory": "DDR4",
                "RAM Slots": "4",
                "Maximum frequency": "4733 MHz",
                "External inputs": "DVI, HDMI, Jack, PS/2, RJ-45 (LAN) 1Gbps, S/PDIF, USB 2.0, USB 3.2 Gen 1 (USB 3.0), USB 3.2 Gen 2",
                "Internal inputs": "ARGB LED Header, COM header, M.2 Socket, RGB LED Header, Serial ATA III, TPM header, USB 2.0 header, USB 3.0 (3.1 Gen 1) bracket",
                "M.2": "1",
                "USB 2.0": "4",
                "USB 3.2 Gen 1 (USB 3.0)": "3",
                "USB 3.1 (3.1 gen2)": "1",
                "Serial ATA III": "4",
                "PCI Express x16": "2",
                "PCI Express x1": "3"
            },
            "rating": 4.8,
            "price": 78
        }
    ],
    "Memory": [
        {
            "name": "Kingston FURY Beast Black 16GB",
            "specifications": {
                "Memory module": "PC4-25600",
                "RAM size ": "16 GB",
                "Memory frequency ": "3200 MHz"
            },
            "rating": 5,
            "price": 51
        },
        {
            "name": "Kingston FURY Beast Black 32GB",
            "specifications": {
                "Memory module": "PC4-28800",
                "RAM size ": "32 GB",
                "Memory frequency ": "3600 MHz"
            },
            "rating": 5,
            "price": 116
        },
        {
            "name": "Corsair Vengeance LPX dark",
            "specifications": {
                "Memory module": "PC4-21300",
                "RAM size ": "16 GB",
                "Memory frequency ": "2666 MHz"
            },
            "rating": 4.9,
            "price": 65
        },
        {
            "name": "Crucial SO-DIMM Single Ranked",
            "specifications": {
                "Memory module": "PC4-19200",
                "RAM size ": "8 GB",
                "Memory frequency ": "2400 MHz"
            },
            "rating": 4.9,
            "price": 33.40
        },
        {
            "name": "Patriot Signature Premium",
            "specifications": {
                "Memory module": "PC4-21300",
                "RAM size ": "8 GB",
                "Memory frequency ": "2666 MHz"
            },
            "rating": 4.8,
            "price": 30.30
        }
    ],
    "SSD": [
        {
            "name": "Samsung 970 Evo Plus 1 TB",
            "specifications": {
                "Format": " M.2",
                "RAM size ": "1000 GB",
                "Read speed": " 3 500 MB/s",
                "Write speed ": " 3 300 MB/s"
            },
            "rating": 4.9,
            "price": 135.90
        },
        {
            "name": "Samsung 970 Evo Plus 2 TB",
            "specifications": {
                "Format": " M.2",
                "RAM size ": "2000 GB",
                "Read speed": " 3 500 MB/s",
                "Write speed ": " 3 300 MB/s"
            },
            "rating": 4.9,
            "price": 232.90
        },
        {
            "name": "Kingston KC2500",
            "specifications": {
                "Format": " M.2",
                "RAM size ": "500 GB",
                "Read speed": " 3 500 MB/s",
                "Write speed ": " 2 500 MB/s"
            },
            "rating": 4.8,
            "price": 52
        },
        {
            "name": "WD Red SA500",
            "specifications": {
                "Format": "2.5",
                "RAM size ": "1000 GB",
                "Read speed": " 560 MB/s",
                "Write speed ": " 530 MB/s"
            },
            "rating": 4.7,
            "price": 128
        },
        {
            "name": "Kingston A400",
            "specifications": {
                "Format": "2.5",
                "RAM size ": "480 GB",
                "Read speed": " 500 MB/s",
                "Write speed ": " 450 MB/s"
            },
            "rating": 4.8,
            "price": 48
        },
        {
            "name": "Samsung 870 EVO",
            "specifications": {
                "Format": "2.5",
                "RAM size ": "1000 GB",
                "Read speed": " 560 MB/s",
                "Write speed ": " 530 MB/s"
            },
            "rating": 4.9,
            "price": 112.90
        }
    ],
    "HDD": [
        {
            "name": "WD Red",
            "specifications": {
                "Format": "3.5",
                "RAM size ": "4000 GB",
                "Read speed": " 180 MB/s",
                "Write speed ": " 180 MB/s"
            },
            "rating": 4.6,
            "price": 116.90
        },
        {
            "name": "Seagate Exos X16",
            "specifications": {
                "Format": "3.5",
                "RAM size ": "16 000 GB",
                "Read speed": "261 MB/s",
                "Write speed ": "261 MB/s"
            },
            "rating": 3.9,
            "price": 374.90
        },
        {
            "name": "Seagate BarraCuda",
            "specifications": {
                "Format": "3.5",
                "RAM size ": "2000 GB",
                "Read speed": "220 MB/s",
                "Write speed ": "220 MB/s"
            },
            "rating": 4.6,
            "price": 53.50
        },
        {
            "name": "Seagate IronWolf Pro",
            "specifications": {
                "Format": "3.5",
                "RAM size ": "8000 GB",
                "Read speed": "240 MB/s",
                "Write speed ": "240 MB/s"
            },
            "rating": 4.4,
            "price": 253.90
        },
        {
            "name": "WD Red Plus",
            "specifications": {
                "Format": "3.5",
                "RAM size ": "4000 GB",
                "Read speed": "150 MB/s",
                "Write speed ": "150 MB/s"
            },
            "rating": 4.8,
            "price": 65.40
        }
    ],
    "Power": [
        {
            "name": "Seasonic Focus Gold Semi-modular",
            "specifications": {
                "Format": "ATX",
                "Power": "650 W",
                "Connectors": " ATX 20+4pin, CPU 8pin / 4+4pin, Floppy 4pin, Molex 4pin, PCI-E 8pin / 6+2pin, SATA 15pin"
            },
            "rating": 4.9,
            "price": 75.43
        },
        {
            "name": "Seasonic Prime 1 Gold",
            "specifications": {
                "Format": "ATX",
                "Power": "1300 W",
                "Connectors": "ATX 20+4pin, CPU 8pin / 4+4pin, Floppy 4pin, Molex 4pin, PCI-E 8pin / 6+2pin, SATA 15pin"
            },
            "rating": 4,
            "price": 228.90
        },
        {
            "name": "GIGABYTE",
            "specifications": {
                "Format": "ATX",
                "Power": "450 W",
                "Connectors": "ATX 20+4pin, CPU 8pin / 4+4pin, Floppy 4pin, Molex 4pin, PCI-E 8pin / 6+2pin, SATA 15pin"
            },
            "rating": 4.7,
            "price": 35.90
        },
        {
            "name": "SilverStone Strider Essential 80Plus ST70F-ES230",
            "specifications": {
                "Format": "ATX",
                "Power": "700 W",
                "Connectors": "ATX 20+4pin, CPU 8pin / 4+4pin, Floppy 4pin, Molex 4pin, PCI-E 8pin / 6+2pin, SATA 15pin"
            },
            "rating": 4.8,
            "price": 47
        },
        {
            "name": "SilverStone SFX-L SX1 Platinum",
            "specifications": {
                "Format": "SFX",
                "Power": "1000 W",
                "Connectors": " ATX 20+4pin, CPU 8pin / 4+4pin, Floppy 4pin, Molex 4pin, PCI-E 8pin, SATA 15pin"
            },
            "rating": 5,
            "price": 233
        }
    ],
    "Case": [
        {
            "name": "Corsair 4000D Airflow",
            "specifications": {},
            "rating": 4.8,
            "price": 94.99
        }, {
            "name": "NZXT H510 ATX",
            "specifications": {},
            "rating": 4.6,
            "price": 73.99
        }, {
            "name": "Corsair iCUE 4000X",
            "specifications": {},
            "rating": 4.8,
            "price": 114.99
        }, {
            "name": "Lian Li PC-O11 Dynamic",
            "specifications": {},
            "rating": 4.9,
            "price": 159.99
        }, {
            "name": "Phanteks Eclipse P300",
            "specifications": {},
            "rating": 4.4,
            "price": 59.99
        }, {
            "name": "Lian Li O11 Dynamic Mini Snow Edition",
            "specifications": {},
            "rating": 4.8,
            "price": 127.99
        }, {
            "name": "Cooler Master MasterBox Q300L",
            "specifications": {},
            "rating": 4.2,
            "price": 59.99
        }],
    "Monitor": [
        {
            "name": "Asus TUF Gaming VG27AQ",
            "specifications": {
                "Screen size": "27.0\"",
                "Resolution": "2560 x 1440",
                "Refresh rate": "165 Hz",
                "Response time (G2G)": "1 ms",
                "Panel type": "IPS",
                "Aspect ratio": "16:9"
            },
            "rating": 4.8,
            "price": 338.99
        }, {
            "name": "HP OMEN X Emperium 65",
            "specifications": {
                "Screen size": "65.0\"",
                "Resolution": "3840 x 2160",
                "Refresh rate": "144 Hz",
                "Response time (G2G)": "4 ms",
                "Panel type": "VA",
                "Aspect ratio": "16:9"
            },
            "rating": 4.4,
            "price": 3999.99
        }, {
            "name": "Asus VG248QG",
            "specifications": {
                "Screen size": "24.0\"",
                "Resolution": "1920 x 1080",
                "Refresh rate": "165 Hz",
                "Response time (G2G)": "0.5 ms",
                "Panel type": "TN",
                "Aspect ratio": "16:9"
            },
            "rating": 4.9,
            "price": 189.99
        },
        {
            "name": "MSI Optix G241",
            "specifications": {
                "Screen size": "23.8.0\"",
                "Resolution": "1920 x 1080",
                "Refresh rate": "144 Hz",
                "Response time (G2G)": "1 ms",
                "Panel type": "IPS",
                "Aspect ratio": "16:9"
            },
            "rating": 4.6,
            "price": 249.89
        },
    ],
    "Sound Card": [
        {
            "name": "Creative Labs Sound Blaster AE-9",
            "specifications": {
                "Channels": 7.1,
                "Digital audio": "32-bit",
                "SNR": "129db",
                "Sample Rate": "384 kHz"
            },
            "rating": 4.5,
            "price": 332.49
        }, {
            "name": "Creative Labs ZXR",
            "specifications": {
                "Channels": 5.1,
                "Digital audio": "24-bit",
                "SNR": "124db",
                "Sample Rate": "192 kHz"
            },
            "rating": 4.6,
            "price": 756.03
        }, {
            "name": "Asus Xonar SE",
            "specifications": {
                "Channels": 5.1,
                "Digital audio": "24-bit",
                "SNR": "120db",
                "Sample Rate": "192 kHz"
            },
            "rating": 5.0,
            "price": 39.99
        }],
    "Wired Network Adapter": [
        {
            "name": "Asus XG-C100C",
            "specifications": {
                "Interface": "PCIe x4",
                "Ports": "1 x 10 Gbit/s"
            },
            "rating": 5.0,
            "price": 92.99
        }, {
            "name": "TP-Link TG-3468",
            "specifications": {
                "Interface": "PCIe x1",
                "Ports": "1 x 1 Gbit/s"
            },
            "rating": 4.7,
            "price": 14.99
        }],
    "Wireless Network Adapter": [
        {
            "name": "TP-Link Archer T4E",
            "specifications": {
                "Interface": "PCIe x1",
                "Protocol": "Wi-Fi 5"
            },
            "rating": 4.6,
            "price": 24.99
        }, {
            "name": "Asus PCE-AX58BT",
            "specifications": {
                "Interface": "PCIe x1",
                "Protocol": "Wi-Fi 6"
            },
            "rating": 4.6,
            "price": 69.98
        }, {
            "name": "TP-Link Archer TX50E",
            "specifications": {
                "Interface": "PCIe x1",
                "Protocol": "Wi-Fi 6"
            },
            "rating": 4.6,
            "price": 119.98
        }]
}

let chosen = {
    "Video card": null,
    "Processor": null,
    "Motherboard": null,
    "Memory": null,
    "SSD": null,
    "HDD": null,
    "Power": null,
    "Case": null
}


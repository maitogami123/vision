let generateProducts = [
  {
     id: "a100",
     img: "./img/AOC_27_AG273QCX74.jpg",
     name: "Màn hình LCD 27” MSI Optix G27CQ4 ",
     price: 8550000,
     type: "monitor",
     description: "testing"
  },
  {
     id: "a101",
     img: "./img/MH_AC_VG240Y.jpg",
     name: "Màn hình LCD 24” Acer VG240Y",
     price: 3990000,
     type: "monitor"
  },
  {
     id: "a102",
     img: "./img/MH_GL_VI01.jpg",
     name: "Màn hình LCD 27” Galax VI-01",
     price: 9990000,
     type: "monitor"
  },
  {
     id: "a103",
     img: "./img/MH_HKC_M27G5F.jpg",
     name: "Màn hình LCD 27” HKC M27G5F",
     price: 5490000,
     type: "monitor"
  },
  {
     id: "a104",
     img: "./img/MH_HKC_M27G3F.jpg",
     name: "Màn hình LCD 27” HKC M27G3F",
     price: 4790000,
     type: "monitor"
  },
  {
     id: "a105",
     img: "./img/MH_AS_VP247HAE.jpg",
     name: "Màn hình LCD 24” Asus VP247HAE",
     price: 3690000,
     type: "monitor"
  },
  {
     id: "a106",
     img: "./img/MH_AS_VY249HE.jpg",
     name: "Màn hình LCD 24” Asus VY249HE",
     price: 3990000,
     type: "monitor"
  },
  {
     id: "a107",
     img: "./img/MH_MSI_G273QF.jpg",
     name: "Màn hình LCD 27” MSI Optix G273QF",
     price: 9850000,
     type: "monitor"
  },
  {
     id: "a108",
     img: "./img/MH_GG_M27F-EK.jpg",
     name: "Màn hình LCD 27” Gigabyte M27F-EK ",
     price: 5990000,
     type: "monitor"
  },
  {
     id: "a109",
     img: "./img/MH_AOC_24G2E.jpg",
     name: "Màn hình LCD 24” AOC 24G2E/74",
     price: 4690000,
     type: "monitor"
  },
  {
     id: "a110",
     img: "./img/MH_AS_VA24DQLB.jpg",
     name: "Màn hình LCD 24” Asus VA24DQLB",
     price: 4350000,
     type: "monitor"
  },
  {
     id: "a111",
     img: "./img/MH_AS_VG27AQGL1A.jpg",
     name: "Màn hình LCD 27” Asus VG27AQGL1A TUF Gaming ZAKU II Edition",
     price: 2490000,
     type: "monitor"
  },
  {
     id: "a112",
     img: "./img/MH_PL_275M1RZ.jpg",
     name: "Màn hình LCD 27” Philips 275M1RZ/74 Momentum",
     price: 1900000,
     type: "monitor"
  },
  {
     id: "a113",
     img: "./img/LCD_AOC_AG493UCX.jpg",
     name: "Màn hình LCD 49” AOC AG493UCX/74",
     price: 5900000,
     type: "monitor"
  },
  {
     id: "a114",
     img: "./img/AS_ROG_Swift_PG259QN.jpg",
     name: "Màn hình LCD 25” Asus PG259QN Swift eSports",
     price: 9450000,
     type: "monitor"
  },
  {
     id: "a115",
     img: "./img/MH_BenQ_XL2546.jpg",
     name: "Màn hình LCD 25” BenQ Zowie XL2546",
     price: 1190000,
     type: "monitor"
  },
  {
     id: "a116",
     img: "./img/AOC_G3908VWX_144Hz.jpg",
     name: "Màn hình LCD 39” AOC G3908VWX ",
     price: 8900000,
     type: "monitor"
  },
  {
     id: "a117",
     img: "./img/MH_INFINI_UG.jpg",
     name: "Màn hình LCD 32” Infini Real UG-329",
     price: 6900000,
     type: "monitor"
  },
  {
     id: "a118",
     img: "./img/MH_AS_TUF_VG279QM.jpg",
     name: "Màn hình LCD 27” Asus VG279QM TUF Gaming",
     price: 9850000,
     type: "monitor"
  },
  {
     id: "a119",
     img: "./img/AOC_27_AG273QCX74.jpg",
     name: "Màn hình LCD 27” AOC Agon AG273QCX/74 ",
     price: 8590000,
     type: "monitor"
  },
  {
     id: "361e",
     name: "VGA Zotac RTX 2060 Super 8G GDDR6 Twin Fan (ZT-T20610N-10B) (No Box)",
     price: 18200000,
     type: "vga",
     description: "Chipset:  GeForce® RTX 2060 SUPER Dung lượng bộ nhớ:  8GB GDDR6 Boost Clock:  1650 MHz CUDA:  2176 Băng thông:  256-bit Kết nối:  DisplayPort, HDMI Nguồn yêu cầu:  550W Nguồn phụ:  1x 8-Pin",
     img: "./img/ZT_RTX2060SP_TF.jpg"
  },
  {
     id: "7aa1",
     name: "VGA Zotac RTX 2060 Super 8G GDDR6 Mini (ZT-T20610E-10M)",
     price: 18200000,
     type: "vga",
     description: "Chipset:  GeForce® RTX 2060 SUPER Dung lượng bộ nhớ:  8GB GDDR6 Boost Clock:  1650 MHz CUDA:  2176 Băng thông:  256-bit Kết nối:  DisplayPort, HDMI Nguồn yêu cầu:  550W Nguồn phụ:  1x 8-Pin",
     img: "./img/ZT_RTX2060SP_MN.jpg"
  },
  {
     id: "c5aa",
     name: "VGA Zotac RTX 3090 24G GDDR6X Trinity (ZT-A30900D-10P) (18T)",
     price: 65900000,
     type: "vga",
     description: "Engine đồ họa:  GeForce RTX™ 3090 Bộ nhớ:  24GB GDDR6X Lõi CUDA:  1‎0496 Giao diện bộ nhớ:  3‎84 bit PSU đề nghị:  7‎50W Đầu nguồn phụ:  8 Pin*2 Đầu ra:  DisplayPort 1.4a, HDMI 2.1",
     img: "./img/ZT_RTX3090_Tri.jpg"
  },
  {
     id: "4466",
     name: "VGA Asus GTX 1650 4G GDDR6 TUF Gaming",
     price: 7390000,
     type: "vga",
     description: "Engine đồ họa:  GeForce GTX 1650 Bộ nhớ:  4GB GDDR6 Giao diện bộ nhớ:  128 bit Kết nối:  DisplayPort 1.4 *1, HDMI 2.0b *1, DVI*1 PSU đề nghị:  300W Đầu nguồn phụ:  1 x 6-pin Model:  (TUF-GTX1650-4GD6-P-GAMING) hoặc (TUF-GTX1650-4GD6-GAMING)",
     img: "./img/AS_GTX1650_D6_TUF_GM.jpg"
  },
  {
     id: "b1d3",
     name: "VGA MSI GTX 1050Ti 4GT GDDR5 OCV1",
     price: 5950000,
     type: "vga",
     description: "Chip đồ họa:  NVIDIA GeForce GTX 1050Ti Bộ nhớ:  4GB GDDR5 (128-bit) Xung nhịp nhân đồ họa:  1455 MHz / 1341 MHz Nguồn phụ:  Không Nguồn đề nghị:  300W Kết nối:  DisplayPort / HDMI / DL-DVI-D",
     img: "./img/MSI_GTX1050Ti_OCV1_4GT.jpg"
  },
  {
     id: "fd5c",
     name: "VGA MSI RTX 3070 8G GDDR6 Ventus X2 OC V2 LHR (GeForce RTX™ 3070 VENTUS 2X 8G OC LHR)",
     price: 24390000,
     type: "vga",
     description: "Engine đồ họa:  GeForce RTX™ 3070 Bộ nhớ:  8GB GDDR6 Lõi CUDA:  5888 Giao diện bộ nhớ:  256 bit TDP:  220W PSU đề nghị:  650W Đầu nguồn phụ:  8 Pin*2 Đầu ra:  DisplayPort x 3 (v1.4a) / HDMI 2.1 x 1",
     img: "./img/MSI_RTX3070_Ventus_X2OC_V2_LHR.jpg"
  },
  {
     id: "d159",
     name: "VGA Galax RTX 3080 10G GDDR6X SG (1-Click OC) V2 LHR (GeForce RTX™ 3080 SG (1-Click OC) LHR)",
     price: 34990000,
     type: "vga",
     description: "Engine đồ họa:  GeForce RTX 3080 Bộ nhớ:  10GB GDDR6X CUDA:  8704 Boost Clock (MHz):  1710 Giao diện bộ nhớ:  320 bit Kết nối:  DisplayPort*3, HDMI*1 PSU đề nghị:  700W Đầu nguồn phụ:  2 x 8-pin",
     img: "./img/GL_RTX3080_SG_1ClickOC_LHR.jpg"
  },
  {
     id: "a6e3",
     name: "VGA Radeon RX550 2G Extra Low Profile (1500Mhz | GDDR5 | 64 bit | ATX Bracket) (TUL1A1-G00355300) (AXRX550 2GBD5-HLEV2) (No Box)",
     price: 2490000,
     type: "vga",
     description: "VGA Radeon RX550 2G Extra Low Profile (1500Mhz | GDDR5 | 64 bit | ATX Bracket) (TUL1A1-G00355300) (AXRX550 2GBD5-HLEV2) (No Box)",
     img: "./img/Kit_AMD_4700S_RX550.jpg"
  },
  {
     id: "9aa4",
     name: "VGA Gigabyte RTX 3080Ti 12G GDDR6X Aorus Master (GV-N308TAORUS M-12GD)",
     price: 49500000,
     type: "vga",
     description: "VGA Gigabyte RTX 3080Ti 12G GDDR6X Aorus Master (GV-N308TAORUS M-12GD)",
     img: "./img/GG_RTX3080Ti_Aorus_Master.jpg"
  },
  {
     id: "483d",
     name: "VGA Palit RTX 3070 8G GDDR6 Game Rock V1 ARGB Triple Fan",
     price: 25690000,
     type: "vga",
     description: "VGA Palit RTX 3070 8G GDDR6 Game Rock V1 ARGB Triple Fan",
     img: "./img/PL_RTX3070_GR_V1.jpg"
  },
  {
     id: "077f",
     name: "CPU Intel Core i9 12900K Box Công Ty (3.20 Up to 5.20GHz | 30MB | 16C 24T | Socket 1700 | Alder Lake | UHD Graphics 770 | 125W)",
     price: 15190000,
     type: "cpu",
     description: "CPU Intel Core i9 12900K Box Công Ty (3.20 Up to 5.20GHz | 30MB | 16C 24T | Socket 1700 | Alder Lake | UHD Graphics 770 | 125W)",
     img: "./img/CPU-i9-12900K_BCT.jpg"
  },
  {
     id: "179c",
     name: "CPU Intel Core i7 12700K Box Công Ty (3.60 Up to 5.00GHz | 25MB | 12C 20T | Socket 1700 | Alder Lake | UHD Graphics 770 | 125W)",
     price: 10290000,
     type: "cpu",
     description: "Bộ xử lý:  I7 12700K – Alder Lake Bộ nhớ đệm:  25 MB Cache (Total L2 Cache:  12 MB) Tần số cơ sở của bộ xử lý:  3.60 GHz Tần số turbo tối đa:  5.00 GHz Hỗ trợ socket:  FCLGA 1700 Số lõi:  12, Số luồng:  20 TDP:  125 W (Max. 190W) Đồ họa tích hợp:  Intel UHD Graphics 770 Dung lượng bộ nhớ tối đa (tùy vào loại bộ nhớ):  128 GB (Up to DDR5 4800 MT/s | Up to DDR4 3200 MT/s)",
     img: "./img/CPU-i7-12700K_BCT.jpg"
  },
  {
     id: "b6a7",
     name: "CPU Intel Core i9 12900K Box Chính Hãng (3.20 Up to 5.20GHz | 30MB | 16C 24T | Socket 1700 | Alder Lake | UHD Graphics 770 | 125W)",
     price: 15400000,
     type: "cpu",
     description: "Bộ xử lý:  I9 12900K – Alder Lake Bộ nhớ đệm:  30 MB Cache (Total L2 Cache:  14 MB) Tần số cơ sở của bộ xử lý:  3.20 GHz Tần số turbo tối đa:  5.20 GHz Hỗ trợ socket:  FCLGA 1700 Số lõi:  16, Số luồng:  24 TDP:  125 W (Max. 241W) Đồ họa tích hợp:  Intel UHD Graphics 770 Dung lượng bộ nhớ tối đa (tùy vào loại bộ nhớ):  128 GB (Up to DDR5 4800 MT/s | Up to DDR4 3200 MT/s)",
     img: "./img/CPU-i9-12900K_BCH.jpg"
  },
  {
     id: "c610",
     name: "CPU Intel Core i7 12700KF Box Chính Hãng (3.60 Up to 5.00GHz | 25MB | 12C 20T | Socket 1700 | Alder Lake | No GPU | 125W)",
     price: 11700000,
     type: "cpu",
     description: "Bộ xử lý:  I7 12700K – Alder Lake Bộ nhớ đệm:  25 MB Cache (Total L2 Cache:  12 MB) Tần số cơ sở của bộ xử lý:  3.60 GHz Tần số turbo tối đa:  5.00 GHz Hỗ trợ socket:  FCLGA 1700 Số lõi:  12, Số luồng:  20 TDP:  125 W (Max. 190W) Đồ họa tích hợp:  Không Dung lượng bộ nhớ tối đa (tùy vào loại bộ nhớ):  128 GB (Up to DDR5 4800 MT/s | Up to DDR4",
     img: "./img/CPU-i7-12700KF_BCH.jpg"
  },
  {
     id: "3a1d",
     name: "CPU Intel Core i7 12700K Box Chính Hãng (3.60 Up to 5.00GHz | 25MB | 12C 20T | Socket 1700 | Alder Lake | UHD Graphics 770 | 125W)",
     price: 10890000,
     type: "cpu",
     description: "Bộ xử lý:  I7 12700K – Alder Lake Bộ nhớ đệm:  25 MB Cache (Total L2 Cache:  12 MB) Tần số cơ sở của bộ xử lý:  3.60 GHz Tần số turbo tối đa:  5.00 GHz Hỗ trợ socket:  FCLGA 1700 Số lõi:  12, Số luồng:  20 TDP:  125 W (Max. 190W) Đồ họa tích hợp:  Intel UHD Graphics 770 Dung lượng bộ nhớ tối đa (tùy vào loại bộ nhớ):  128 GB (Up to DDR5 4800 MT/s | Up to DDR4 3200 MT/s)",
     img: "./img/CPU-i7-12700K_BCT.jpg"
  },
  {
     id: "1264",
     name: "CPU AMD RYZEN 7 5700G (3.8GHz Up to 4.6GHz, AM4, 8 Cores 16 Threads) Box Chính Hãng",
     price: 8490000,
     type: "cpu",
     description: "Số nhân:  8 Số luồng:  16 Xung cơ bản:  3,8GHz Xung Max Boost:  Lên đến 4.6GHz Tổng bộ nhớ đệm L2:  4MB Tổng bộ nhớ đệm L3:  16MB Khả năng ép xung:  Có CMOS:  TSMC 7nm FinFET Socket:  AM4 Phiên bản PCI Express®:  PCIe 3.0 Giải pháp nhiệt (PIB):  Wraith Stealth TDP / TDP mặc định:  65W cTDP:  45-65W Nhiệt độ tối đa:  95°C Đồ họa tích hợp:  Radeon Vega 8",
     img: "./img/AMD-RZ7-5700G.jpg"
  },
  {
     id: "ce7d",
     name: "CPU AMD RYZEN 5 5600G (3.9GHz Up to 4.4GHz, AM4, 6 Cores 12 Threads) Box Chính Hãng",
     price: 6490000,
     type: "cpu",
     description: "Số nhân:  6 Số luồng:  12 Xung cơ bản:  3,9GHz Xung Max Boost:  Lên đến 4.4GHz Tổng bộ nhớ đệm L2:  3MB Tổng bộ nhớ đệm L3:  16MB Khả năng ép xung:  Có CMOS:  TSMC 7nm FinFET Socket:  AM4 Phiên bản PCI Express®:  PCIe 3.0 Giải pháp nhiệt (PIB):  Wraith Stealth TDP / TDP mặc định:  65W cTDP:  45-65W Nhiệt độ tối đa:  95°C Đồ họa tích hợp:  Radeon Vega 7",
     img: "./img/AMD-RZ5-5600G.jpg"
  },
  {
     id: "90fd",
     name: "CPU AMD RYZEN 5 3500 (3.6GHz Up to 4.1GHz, AM4, 6 Cores 6 Threads) Box Công Ty",
     price: 2990000,
     type: "cpu",
     description: "Bộ xử lý:  Ryzen 5 3500 Hỗ trợ socket:  AM4 Số lõi:  6 Số luồng:  6 TDP:  65 W Các loại bộ nhớ:  DDR4-3200 Kiến trúc:  Zen 2 7nm",
     img: "./img/AMD-RZ5-3500_CT.jpg"
  },
  {
     id: "a261",
     name: "CPU AMD RYZEN 5 3500X (3.6GHz Up to 4.1GHz, AM4, 6 Cores 6 Threads) Box Chính Hãng",
     price: 3550000,
     type: "cpu",
     description: "Bộ xử lý:  Ryzen 5 3500X Hỗ trợ socket:  AM4 Số lõi:  6 Số luồng:  6 TDP:  65 W Các loại bộ nhớ:  DDR4-3200 Kiến trúc:  Zen 2 7nm",
     img: "./img/cpu-amd-ryzen-5-3600xt.jpg"
  },
  {
     id: "cefe",
     name: "CPU AMD RYZEN 9 5950X (3.4GHz Up to 4.9GHz, AM4, 16 Cores 32 Threads) Box Chính Hãng",
     price: 18990000,
     type: "cpu",
     description: "Socket:  AM4 , AMD Ryzen 5000 Series Tốc độ xử lý:  3.40GHz – 4.90GHz ( 16 nhân, 32 luồng) Bộ nhớ đệm:  64MB Kiến trúc:  Zen 3 – 7nm Khả năng ép xung:  Có Phiên bản PCI Express®:  PCIe 4.0 TDP / TDP mặc định:  105W Hỗ trợ bộ nhớ:  DDR4 – 3200 Mhz",
     img: "./img/cpu-amd-ryzen-9-5950x-3-4ghz-up-to-4-9ghz-am4-16-cores-32-threads-box-chinh-hang.jpg"
  },
  {
     id: "1b05",
     name: "Cấu Hình Gaming ETENAL RX6600",
     price: 34000000,
     type: "pc",
     description: "MAINBOARD MSI MAG B550 TOMAHAWK CPU AMD Ryzen 5 5600X Box Chính Hãng RAM D4 Kingston 16GB/3200 (2x 8GB) HyperX Fury Beast RGB VGA RX 6600 8GB SAPPHIRE PULSE SSD Kingston 500G NV1 NVMe PCIe Gen3x4 (SNVS/500G) PSU Corsair CV650 650W 80 Plus Bronze CASE Case Cooler Master MasterBox K501L ARGB Mid Tower CPU Cooling THERMALTAKE AIO Water 3.0 240 ARGB Sync Edition",
     img: "./img/TIDAL-RX-6600.jpg"
  },
  {
     id: "6bba",
     name: "Cấu Hình Gaming_PRO LEGION RTX 3060TI",
     price: 49790000,
     type: "pc",
     description: "MAINBOARD MSI Z590-A Pro CPU Intel Core I7 11700F Box Chính Hãng RAM DDR4 Gskill 32G/3600 Trident Z NEO RGB (2x 16GB) SSD Gigabyte 1TB Aorus M.2 NVMe PCIe Gen4 (GP-ASM2NE6100TTTD) VGA INNO3D RTX 3060Ti 8GB Twin X2 OC V2 (N306T2-08D6X-119032DH) PSU MSI MPG A850GF 850W 80 Plus Gold Full Modular CASE Xigmatek AQUARIUS S – BLACK (EN46508) CPU COOLING Cooler Master Masterliquid ML240L V2 ARGB AiO FAN CASE ID-COOLING DF-12025-ARGB Trio (Pack 3 Fan)",
     img: "./img/PRO-LEGION-RTX-3060TI.jpg"
  },
  {
     id: "6928",
     name: "Cấu Hình Gaming GODZILLA Z690",
     price: 37780000,
     type: "pc",
     description: "MAINBOARD Gigabyte X570 Aorus Elite CPU AMD Ryzen 5 5600X Box Chính Hãng RAM D4 Gskill 32GB/3600 (2x 16GB) Trident Z NEO RGB VGA RX 6600 8GB Gigabyte EAGLE (GV-R66EAGLE-8GD) SSD Kingston 250G NV1 M.2 NVMe PCIe Gen3x4 (SNVS/250G) PSU Cooler Master 650W MWE 650 V2 80 Plus White (MPE-6501-ACABW) CASE Cooler Master MasterBox MB511 Red Trim Mid Tower CPU Cooling Cooler Master Masterliquid ML240L V2 ARGB AiO Liquid",
     img: "./img/GODZILLA-Z690-1.jpg"
  },
  {
     id: "3820",
     name: "Cấu Hình Gaming TIDAL RX 6600",
     price: 37780000,
     type: "pc",
     description: "MAINBOARD Gigabyte X570 Aorus Elite CPU AMD Ryzen 5 5600X Box Chính Hãng RAM D4 Gskill 32GB/3600 (2x 16GB) Trident Z NEO RGB VGA RX 6600 8GB Gigabyte EAGLE (GV-R66EAGLE-8GD) SSD Kingston 250G NV1 M.2 NVMe PCIe Gen3x4 (SNVS/250G) PSU Cooler Master 650W MWE 650 V2 80 Plus White (MPE-6501-ACABW) CASE Cooler Master MasterBox MB511 Red Trim Mid Tower CPU Cooling Cooler Master Masterliquid ML240L V2 ARGB AiO Liquid",
     img: "./img/TIDAL-RX-6600.jpg"
  },
  {
     id: "fa15",
     name: "Cấu Hình Gaming HAWKE RX 6600",
     price: 41350000,
     type: "pc",
     description: "MAINBOARD Asus ROG Strix B550-XE Gaming Wifi CPU AMD Ryzen 5 5600X Box Chính Hãng RAM D4 Gskill 32GB/3600 (2x 16GB) Trident Z NEO RGB VGA RX 6600 8GB Asus Dual (DUAL-RX6600-8G) SSD Kingston 250G NV1 M.2 NVMe PCIe Gen3x4 (SNVS/250G) PSU Asus ROG Strix 650W 80 Plus Gold Modular (ROG-STRIX-650G) CASE Asus TUF Gaming GT301 Mid Tower CPU Cooling Asus TUF Gaming LC 240 RGB AiO Liquid",
     img: "./img/HAWKE-RX-6600.jpg"
  },
  {
     id: "3493",
     name: "Cấu Hình Gaming ELITE GF 7680",
     price: 4238000,
     type: "pc",
     description: "MAINBOARD ASrock A68 FM2A68M-DG3+ CPU AMD A8 7680 (3.8GHz, FM2+, 4C 4T, Radeon R7) Box Chính Hãng RAM D3 Dato 8GB/1600 (2x 4GB) HDD Toshiba 500G P300 PSU Acbel HK+ 350W CASE VSP Vision V28xx",
     img: "./img/ELITE-GF-7680.jpg"
  },
  {
     id: "8037",
     name: "Cấu Hình Gaming HADES RX550",
     price: 9334000,
     type: "pc",
     description: "MAIN MSI A320M-A Pro MAX CPU AMD Ryzen 3 3300X TRAY + FAN RAM DDR4 Dato 8GB 2666Mhz Tản Nhiệt VGA Powercolor RX550 2GB Red Dragon SSD Colorful 120GB SL300 PSU Jetek STAR NS500 500W CASE Xigmatek Athena FAN CASE WM-STAR V8 RGB (x5)",
     img: "./img/HADES-RX550.jpg"
  },
  {
     id: "4753",
     name: "Cấu Hình Gaming CYBORG RZ 5700G",
     price: 15605000,
     type: "pc",
     description: "MAINBOARD Asus B550M-K Prime CPU AMD Ryzen 7 5700G Box Chính Hãng RAM D4 TeamGroup 8GB/3200 T-Force Vulcan Z SSD KIOXIA 250GB M.2 NVMe PCIe (LRC10Z250GG8) PSU Jetek STAR 600W ST600 CASE Xigmatek Gemini Arctic White FAN CASE WM-STAR V8 RGB (x5)",
     img: "./img/CYBORG-RZ-5700G.jpg"
  },
  {
     id: "d145",
     name: "Cấu Hình Gaming SPLASH RZ 5600G",
     price: 12605000,
     type: "pc",
     description: "MAINBOARD Asus B550M-K Prime CPU AMD Ryzen 5 5600G Box Chính Hãng RAM D4 TeamGroup 8GB/3200 T-Force Vulcan Z SSD KIOXIA 250GB M.2 NVMe PCIe (LRC10Z250GG8) PSU Jetek STAR 500W NS500 CASE Xigmatek NYC FAN CASE WM-STAR V8 RGB (x5)",
     img: "./img/SPLASH-RZ-5600G.jpg"
  },
  {
     id: "f1b6",
     name: "Cấu Hình Gaming SIFU RYZEN 6600 XT",
     price: 43730000,
     type: "pc",
     description: "MAINBOARD MSI B550 TOMAHAWK CPU AMD Ryzen 5 5600X Box Chính Hãng RAM D4 Gskill 16GB/3600 Trident Z NEO RGB VGA SAPPHIRE RX6600 XT 8GB NITRO+ SSD Samsung 500GB 980 Pro NVMe PCIe Gen 4 HDD Seagate 2TB BarraCuda (ST2000DM008) PSU Cooler Master 650W MWE 650 80 Plus Gold CASE Cooler Master MB511 Red Trim Mid Tower CPU Cooling ID-Cooling SE-224-XT ARGB V2 FAN CASE Xigamtek Galaxy III Essential BX120 ARGB (x2)",
     img: "./img/SIFU-RYZEN-6600-XT.jpg"
  },
  {
     id: "0a16",
     name: "Bàn Phím Cơ Motospeed WS1 Rainbow Light Switch ZEUS (Đen)",
     price: 690000,
     type: "gear",
     description: "Cổng kết nối USB Phong cách thiết kế Chống nước Số lượng nút bấm 104 Số lượng nút chức năng 12 Loại bàn phím Bàn phím cơ Sử dụng Switch quang-cơ ZEUS Màu đèn bàn phím Rainbow Màu sắc bàn phím Đen Tương thích với HĐH windows 7/8/10 và Mac OS",
     img: "./img/KB_MTS_WS1_DE.jpg"
  },
  {
     id: "7bd8",
     name: "Bàn Phím Cơ AKKO 3087 Dragon Ball Z – Goku – Cherry Brown Switch",
     price: 2100000,
     type: "gear",
     description: "Model:  3087 (Tenkeyless, 87 keys) Kết nối:  USB Type-C, có thể tháo rời Kích thước:  360 x 140 x 40mm | Trọng lượng ~ 0.95 kg Hỗ trợ NKRO / Multimedia / Macro / Khóa phím windows Keycap:  PBT Dye-Subbed – OEM Profile Loại switch:  Cherry switch (Brown) Phụ kiện:  1 sách hướng dẫn sử dụng + 1 keypuller + 1 cover che bụi + 1 dây cáp USB Type-C to USB + 07 keycap tặng kèm Tương thích:  Windows / MacOS / Linux Bàn phím AKKO khi kết nối với MacOS:  (Ctrl -> Control | Windows -> Command | Alt -> Option, Mojave OS trở lên sẽ điều chỉnh được thứ tự của các phím này)",
     img: "./img/KB_AK_3087_DBGK_BR_SW.jpg"
  },
  {
     id: "ea8b",
     name: "Combo Phím Chuột Không Dây HP CS500 (Đen)",
     price: 469000,
     type: "gear",
     description: "Model:  CS500 Màu sắc:  Đen Kết nối:  USB Dạng kết nối:  không dây (2.4 GHz)",
     img: "./img/CB_HP_CS500.jpg"
  },
  {
     id: "70f7",
     name: "Bàn Phím Cơ AKKO 3068B Multi-modes World Tour Tokyo V2 Wireless Jelly White Switch (BT5.0/2.4Ghz | Hotswap | Foam tiêu âm | AKKO CS Jelly sw)",
     price: 1760000,
     type: "gear",
     description: "Model:  3068B (68keys) Kết nối:  USB Type C, có thể tháo rời / Bluetooth 5.0 (tối đa 3 thiết bị)/ Wireless 2.4Ghz (1 trong 3) Pin 1800 mah LED nền RGB (Backlit, dạng SMT bottom không cấn switch) với nhiều chế độ Hỗ trợ thay nóng switch (hotswap, 5 pin, TTC hotswap socket) Có lót tiêu âm (FOAM) EVA dầy 3.5mm (nằm giữa plate và PCB) Stab pre-lubed và được tinh chỉnh sẵn Kích thước:  306x197x39mm | Trọng lượng ~ 0.64kg Keycap:  PBT Dye-Subbed, OEM profile Loại switch:  AKKO CS Switch (Jelly White / Jelly Pink) Hỗ trợ NKRO / Multimedia / Macro / Khóa phím Windows Phụ kiện:  1 sách hướng dẫn sử dụng + 1 keypuller + 1 cover che bụi + 1 dây cáp USB + USB Receiver 2.4Ghz + keycap tặng kèm Tương thích:  Windows / MacOS / Linux (có hỗ trợ MAC Function) Bàn phím AKKO khi kết nối với MacOS:  (Ctrl -> Control | Windows -> Command | Alt -> Option, Mojave OS trở lên sẽ điều chỉnh được thứ tự của các phím này)",
     img: "./img/KB_AK_3068B_WTT.jpg"
  },
  {
     id: "59ec",
     name: "Bàn Phím Cơ AKKO 3068B Multi-modes Silent V2 Wireless Jelly Pink Switch (BT5.0/2.4Ghz | Hotswap | Foam tiêu âm | AKKO CS Jelly sw)",
     price: 1650000,
     type: "gear",
     description: "Model:  3068B (68keys) Kết nối:  USB Type C, có thể tháo rời / Bluetooth 5.0 (tối đa 3 thiết bị)/ Wireless 2.4Ghz (1 trong 3) Pin 1800 mah LED nền RGB (Backlit, dạng SMT bottom không cấn switch) với nhiều chế độ Hỗ trợ thay nóng switch (hotswap, 5 pin, TTC hotswap socket) Có lót tiêu âm (FOAM) EVA dầy 3.5mm (nằm giữa plate và PCB) Stab pre-lubed và được tinh chỉnh sẵn Kích thước:  306x197x39mm | Trọng lượng ~ 0.64kg Keycap:  PBT Dye-Subbed, OEM profile Loại switch:  AKKO CS Switch (Jelly Blue / Jelly Pink) Hỗ trợ NKRO / Multimedia / Macro / Khóa phím Windows Phụ kiện:  1 sách hướng dẫn sử dụng + 1 keypuller + 1 cover che bụi + 1 dây cáp USB + USB Receiver 2.4Ghz + keycap tặng kèm Tương thích:  Windows / MacOS / Linux (có hỗ trợ MAC Function) Bàn phím AKKO khi kết nối với MacOS:  (Ctrl -> Control | Windows -> Command | Alt -> Option, Mojave OS trở lên sẽ điều chỉnh được thứ tự của các phím này)",
     img: "./img/KB_AK_3068B.jpg"
  },
  {
     id: "5d28",
     name: "Bàn Phím Cơ AKKO 3068B Multi-modes World Tour Tokyo V2 Wireless Jelly Pink Switch (BT5.0/2.4Ghz | Hotswap | Foam tiêu âm | AKKO CS Jelly sw)",
     price: 1760000,
     type: "gear",
     description: "Model:  3068B (68keys) Kết nối:  USB Type C, có thể tháo rời / Bluetooth 5.0 (tối đa 3 thiết bị)/ Wireless 2.4Ghz (1 trong 3) Pin 1800 mah LED nền RGB (Backlit, dạng SMT bottom không cấn switch) với nhiều chế độ Hỗ trợ thay nóng switch (hotswap, 5 pin, TTC hotswap socket) Có lót tiêu âm (FOAM) EVA dầy 3.5mm (nằm giữa plate và PCB) Stab pre-lubed và được tinh chỉnh sẵn Kích thước:  306x197x39mm | Trọng lượng ~ 0.64kg Keycap:  PBT Dye-Subbed, OEM profile Loại switch:  AKKO CS Switch (Jelly White / Jelly Pink) Hỗ trợ NKRO / Multimedia / Macro / Khóa phím Windows Phụ kiện:  1 sách hướng dẫn sử dụng + 1 keypuller + 1 cover che bụi + 1 dây cáp USB + USB Receiver 2.4Ghz + keycap tặng kèm Tương thích:  Windows / MacOS / Linux (có hỗ trợ MAC Function) Bàn phím AKKO khi kết nối với MacOS:  (Ctrl -> Control | Windows -> Command | Alt -> Option, Mojave OS trở lên sẽ điều chỉnh được thứ tự của các phím này)",
     img: "./img/KB_AK_3068B_WTT.jpg"
  },
  {
     id: "4143",
     name: "Tai Nghe Rapoo VH310 Virtual 7.1 RGB Gaming Headset",
     price: 380000,
     type: "gear",
     description: "Âm thanh vòm giả lập 7.1 kênh Micrô giảm tiếng ồn ENC mang giọng nói rỏ ràng Đèn nền RGB 16 triệu màu Màng Loa 50mm hiệu suất âm thanh lớn Chụp tai lớn phủ cả tai Thiết kế khung treo tai nghe cực nhẹ",
     img: "./img/HP_RP_VH310.jpg"
  },
  {
     id: "b816",
     name: "Tai Nghe Razer Kraken Kitty Chroma (Quartz) – RZ04-02980200-R3M1",
     price: 4250000,
     type: "gear",
     description: "Thiết kế tai mèo độc đáo Led RGB Chroma 16.8 triệu màu, bao gồm cả phần tai mèo Có thể cắm vào nguồn điện sạc dự phòng để hiện led mà không cần cắm vào PC Micro với tính năng lọc ồn Công nghệ THX Spatial Audio Đệm tai nghe làm mát bằng Gel Kết nối thông dụng:  USB Hệ thống tương thích:  PC, PS4™, Xbox One™, Mac®, Di động, và Nintendo Switch™",
     img: "./img/HP_RZ_Kraken-Kitty.jpg"
  },
  {
     id: "31c6",
     name: "Tai Nghe Razer BlackShark V2-Wired-USB Sound Card – RZ04-03230100-R3M1",
     price: 2390000,
     type: "gear",
     description: "Razer™ TriForce Titanium 50mm Drivers cho chất lượng âm thanh sáng và mạnh mẽ hơn Razer™ HyperClear Cardioid Mic :  Micro có thể tháo rời với tính năng lọc âm, tái tạo giọng nói tốt Đệm tai nghe Memory Foam cực kỳ mềm mại, thoải mái Trang bị dây cáp SpeedFlex độ bền cao Công nghệ âm thanh vòm chất lượng cao THX Spatial Audio Kết nối 3.5mm đi kèm với USB Sound Card",
     img: "./img/HP_RZ_BlackShark-V2-USB.jpg"
  },
  {
     id: "bebb",
     name: "Bàn Phím Cơ HP HyperX Alloy Origins – Blue Switch (KB6BLX)",
     price: 1999000,
     type: "gear",
     description: "Bàn phím HyperX Alloy Origins Sử dụng công tắc phím cơ học HyperX Toàn thân làm bằng nhôm dùng chế tạo máy bay Thiết kế gọn gàng, di động với cáp USB Type-C có thể tháo rời Chiếu sáng RGB rực rỡ với hiệu ứng động Tùy biến nâng cao bằng phần mềm HyperX NGENUITY Ba góc bàn phím điều chỉnh được Bộ nhớ riêng lưu được ba cấu hình Chế độ Game, các tính năng 100% anti-ghosting và N-Key rollover",
     img: "./img/KB_HP_HyperX-Alloy-Origins.jpg"
  }
]

let userList = [
  {
    email:  "shikigamimaito24@gmail.com",
    fullname:  "Le Thai Vi",
    password:  "123123",
    phoneNumber:  "0352116516",
    role:  "user",
    username:  "123123"
  },
  {
    email:  "shikigamimaito3@gmail.com",
    fullname:  "Le Thai Vi",
    password:  "123123",
    phoneNumber:  "0352116516",
    role:  "admin",
    username:  "vi"
  },
]

// ================================ Utilities Function ===========================================

function formatPrice(price) {
    var formatter = new Intl.NumberFormat('vi-VN', {
        style:  'currency',
        currency:  'VND',
    });
    return formatter.format(price); 
}

function getProduct() {
  let productList = JSON.parse(localStorage.getItem("products"));
  return productList ? productList :  [];
}

function generateProduct() {
  localStorage.setItem("products", JSON.stringify(generateProducts));
}

function generateUser() {
  localStorage.setItem('userList', JSON.stringify(userList));
}

function generateUniqueId() {
  let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return id;
}

// ============================== initial function =============================

window.onload = () => {
   if (!localStorage.getItem('products')) {
      generateProduct();
   }
   if (!localStorage.getItem('userList')) {
      generateUser();
   }
}
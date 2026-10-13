<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates: MAX14720/MAX14750

## General Description

The  MAX14750  evaluation  system  (EV  system)  is  a fully  assembled  and  tested  circuit  for  evaluating  the MAX14720/MAX14750  power-management solutions with  I 2 C  capability  for  space-constrained,  battery-powered  applications.  Both  the  MAX14720  and  MAX14750 integrate  a  synchronous  buck  converter,  a  buck-boost converter,  a  linear  regulator,  and  a  power  switch.  The MAX14750 provides individual pin enables for each function,  while  the  MAX14720 includes a push-button monitor  and  sequencing  controller.  Refer  to  the  MAX14720/ MAX14750 IC data sheet for detailed information regarding the operation and features of the devices.

The EV kit comes standard with the MAX14750A installed but can also be used to evaluate the MAX14720 by replacing the MAX14750A (U1) with the MAX14720. Request a free sample of the MAX14720 when ordering the EV kit.

## MAX14750 EV System Photo

Figure 1. MAX14750 EV System Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX14750 Evaluation System

## Features

- USB-Power Option
- Flexible Configuration
- On-Board Battery Simulation
- Sense Test Point for Output-Voltage Measurement
- Windows 8 ® /Windows 10 ® -Compatible Graphical User Interface (GUI) Software
- Fully Assembled and Tested

## EV Kit Contents

- MAXX14750\_SYS\_EVKIT\_A system
- MAXPICO2PMB# board
- Two USB A to USB micro-B cables

Ordering Information appears at end of data sheet.

319-100855; Rev 0; 12/21

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2021  Analog  Devices,  Inc.  All  rights  reserved. © 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX14750 EV Kit Files

| FILE                     | DESCRIPTION    |
|--------------------------|----------------|
| MAXPICO2PMBSetupVXXX.exe | PC GUI Program |

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of adapter board software. Text which is bold and underlined refers to items from the Windows operating system.

- MAX14750 EV system
- Windows PC with USB ports
- One USB A-to-USB micro-B cable and PICO2PMB adapter board with the latest firmware
- One USB A-to-USB micro-B cable or power supply (for battery simulation or battery voltage)
- One voltmeter

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Visit https://www.maximintegrated.com to download the latest version of the EV system software, MAXPICO2PMBSetupVXXX.exe located on the MAX14750 EV system web page. Download the EV system software to a temporary folder and unzip the zip file.
- 2) Install the EV system software on the computer by running the MAXPICO2PMBSetupVXXX.exe program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Make sure JP2 and JP14 are not installed until all connections have been verified.
- 5) Connect the type-A end of a cable to the PC and micro-USB end of a cable to the MAXPICO2PMB# board, and connect the MAXPICO2PMB# to J1 located on the lower left of the EV kit board.
- 6) Connect a USB A to micro-B cable from the computer to J2 on the upper right corner of the EV kit board to use VBUS to power the battery simulation circuits on the board, or power the battery simulation circuits from the VHC test point.
- 7) Use a voltmeter to check VHC is approximately 5V; BATSIM test point is approximately 3.7V. To adjust the BATSIM voltage, turn the R58 BATSIM potentiometer.
- 8) On the computer, open the MAXPICO2PMB Register Map Tool. The status bar on the bottom of the MAXPICO2PMB Register Map Tool software shows Not Connected as shown in Figure 2.
- 9) Drag the MAX14720-50\_Regmap.regmap to the MAXPICO2PMB Register Map Tool.
- 10) Alternative method to load the Regmap file:
- 11)  Click on the File menu, then Open Register File and select the appropriate directory by choosing Browse to load the MAX14720-50\_Regmap.regmap.
- 12)  Once the Regmap has been loaded, the device name and slave address appear on the window (See Figure 3).
- 13)  Click OK and Regmap will be populated.
- 14)  Reinstall JP2 and JP16 on the MAX14750\_SYS\_ EVKIT\_A and the status of the EV kit tool now show Connected . Upon successful connection, the device info populates in the EV kit software (See Figure 4).

## Evaluates: MAX14720/MAX14750

Figure 2. Configuring the EV Kit Tool with MAXPICO2PMB Adapter Board

<!-- image -->

Figure 3. Click OK to Load the Register Map

<!-- image -->

## MAX14750 Evaluation System

Figure 4. Regmap Populated and Status Shows Connected

<!-- image -->

## Detailed Description of Software

## Software Startup

After opening the application, make sure that Connected is shown in the status bar at the bottom of the window. If any other message is displayed, check all connections, and verify  that  the  steps  in  the  procedure  section  were followed in the correct order.

## Buck Regulator MAX14720

- 1) Register can be read and written by clicking the Read and Write button.
- 2) Click Read All button to refresh the register map.
- 3) Connect DMM positive lead to TP12 (BIN) and negative lead to any GND test point.
- 4) Click on register address 0x08 , BuckCfg.
- 5) To enable the Buck output, write 1 into bit 3 of register 0x08, BuckEn[0].
- 6) Ensure that DMM is reading voltage 1.2V-1.8V (depending on MAX14750/14720 OTP) after the previous step and 0x08 register value changed from 0xE0 to 0xE8.

## MAX14750

- 1) For MAX14750, the regulator must be enabled using JP4 jumper to pull BEN high.
- 2) Use a shunt to connect BEN\_MPC to HI in JP4.
- 3) The same procedure applies to LEN, HVEN, and SWEN.

│

## MAX14750 Evaluation System

Figure 5. Enabling Buck Regulator

<!-- image -->

Figure 6. Verifying Buck Regulator is Enabled

<!-- image -->

## MAX14750 Evaluation System

## Detailed Description of Hardware

To use the EV kit with the EV kit software, connect the MAXPICO2PMB#  to  the  PMOD  connector  in  the  bottom left corner of the board. The MAXPICO2PMB# also provides 3.3V to the logic voltage VIO of the EV kit when shunting JP2. Use the JP14 and JP1 USB VBUS to power the battery simulation circuits on the EV kit to supply BAT of  the  IC. Turning  the  R58  (BATSIM) potentiometer can change the BATSIM voltage. Connect BATSIM to VCC of the IC with shunt on JP1.

## PFNs and MPCs States

The PFNs and MPCs can be pulled up to VIO through a 100kΩ resistor or connected to ground through a 100kΩ resistor.

Figure 7. MAX14750\_SYS\_EVKIT\_A

<!-- image -->

## Evaluates: MAX14720/MAX14750

The MAX14750 provides direct pin control of each function and allows greater flexibility for controlling sequencing. BEN, LEN, HVEN, and SWEN pins can be pulled up using the JP4-JP7 jumpers on the board. The MAX14720 includes a button monitor to power on the part and exit seal mode.

## Regulators and Peripherals

All  regulator  outputs  are  made  available  on  test  points. The inputs to the HVIN, BIN, LIN, and SWIN must be supplied through JP9, JP10, JP11, and JP12, respectively.

│

## MAX14750 Evaluation System

## Table 1. Jumper Table

| JUMPER   | SHUNT POSITION   | MAX14750 DESCRIPTION                        | MAX14720 DESCRIPTION                 |
|----------|------------------|---------------------------------------------|--------------------------------------|
| JP1      | 1-2              | Supplies VCC through VBUS                   |                                      |
| JP1      | 2-3*             | Supplies VCC through BATSIM                 |                                      |
| JP2      | 1-2*             | VIO connect to 3.3V from PMOD               |                                      |
| JP3      | 1-2              | SDA connects to ground. Used to probe I 2 C |                                      |
| JP3      | 2-3              | SCL connects to ground. Used to probe I 2 C |                                      |
| JP4      | 1-2              | BEN pulldown to ground                      | MPC pulldown to ground               |
| JP4      | 1-3              | BEN connect to GPIO3                        | MPC connect to GPIO3                 |
| JP4      | 1-4              | BEN pullup to VIO                           | MPC pullup to VIO                    |
| JP5      | 1-2              | LEN pulldown to ground                      | RSTB pulldown to ground              |
| JP5      | 1-3              | LEN connect to GPIO4                        | RSTB connect to GPIO4                |
| JP5      | 1-4              | LEN pullup to VIO                           | RSTB pullup to VIO                   |
| JP6      | 1-2              | HVEN pulldown to ground                     | KOUT pulldown to ground              |
| JP6      | 1-3              | HVEN connect to GPIO2                       | KOUT connect to GPIO2                |
| JP6      | 1-4              | HVEN pullup to VIO                          | KOUT pullup to VIO                   |
| JP7      | 1-2              | SWEN pulldown to ground                     | KIN (PFN1) pulldown to ground        |
| JP7      | 1-3              | SWEN connect to GPIO1                       | KIN (PFN1) connect to GPIO1          |
| JP7      | 1-4              | SWEN pullup to VIO                          | KIN (PFN1) pullup to VIO             |
| JP8      | 1-2**            | Connects LEN to LED reset indicator         | Connects RSTB to LED reset indicator |
| JP9      | 1-2*             | Supplies HVIN through VSYS                  |                                      |
| JP10     | 1-2*             | Supplies BIN through VSYS                   |                                      |
| JP11     | 1-2*             | Supplies LIN through VSYS                   |                                      |
| JP11     | 2-3              | Supplies LIN through BOUT                   |                                      |
| JP12     | 1-2              | Supplies SWIN through BOUT                  |                                      |
| JP12     | 1-3              | Supplies SWIN through VCC                   |                                      |
| JP12     | 1-4*             | Supplies SWIN through VSYS                  |                                      |
| JP13     | 1-2*             | Connects VSYS to VCC                        |                                      |
| JP13     | 2-3              | Connects VSYS to SWOUT                      |                                      |
| JP14     | 1-2*             | VHC connect to USB VBUS                     |                                      |

## Table 2. Connectors Description

| CONNECTOR   | DESCRIPTION                                     |
|-------------|-------------------------------------------------|
| J1          | Connect to MAXPICO2PMB#                         |
| J2          | Connect to the USB cable for battery simulation |

Evaluates: MAX14720/MAX14750

│

## MAX14750 Evaluation System

## MAXPICO2PMB Firmware Update

This section covers the procedure to update the PICO2PMB adapter board with the latest firmware by programming a firmware image file (.bin) onto the on-board MAX32625PICO microcontroller.

- 1) Put the board in maintenance mode by holding the button while the board is being connected to the computer. It may be easier to hold the button while inserting the USB cable at the computer end rather than the micro USB connector end (see Figure 8).
- 2) If the board enters bootloader mode successfully, the LED on the board turns red and the board appears to the computer as a USB drive named MAINTENANCE.
- 3) Drag and drop the firmware image file (.bin) into the MAINTENANCE drive and the board will install the new firmware.

## Ordering Information

| FILE           | DESCRIPTION   |
|----------------|---------------|
| MAX14750EVSYS# | EV Kit        |

#Denotes RoHS compliance.

Figure 8. Enter Maintenance Mode on the MAX32625PICO.

<!-- image -->

## MAX14750 Evaluation System

## MAX14750 EV System Bill of Materials

|   ITEM | REF_DES                                     | DNI/DNP   |   QTY | MFG PART #                                                                                                        | MANUFACTURER                                                                                                      | VALUE           | DESCRIPTION                                                                                                |
|--------|---------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------|
|      1 | BATSIM, TP1-TP3, VHC                        | -         |     5 | 5010 KEYSTONE                                                                                                     | 5010 KEYSTONE                                                                                                     | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;      |
|      2 | BIN_S, BOUT_S, HVIN_S, HVOUT_S, TP4, TP5    | -         |     6 | 5002 KEYSTONE                                                                                                     | 5002 KEYSTONE                                                                                                     | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;      |
|      3 | C1, C2, C6, C10                             | -         |     4 | C1608X5R0J226M080AC; GRM188R60J226ME15 TDK;MURATA                                                                 | C1608X5R0J226M080AC; GRM188R60J226ME15 TDK;MURATA                                                                 | 22UF            | CAP; SMT (0603); 22UF; 20%; 6.3V; X5R; CERAMIC                                                             |
|      4 | C3, C4, C7                                  | -         |     3 | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC MURATA;SAMSUNG; MURATA;TDK              | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC MURATA;SAMSUNG; MURATA;TDK              | 4.7UF           | CAP; SMT (0402); 4.7UF; 20%; 10V; X5R; CERAMIC                                                             |
|      5 | C5, C9                                      | -         |     2 | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; TDK;MURATA;TDK; TAIYO YUDEN                          | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; TDK;MURATA;TDK; TAIYO YUDEN                          | 0.1UF           | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                             |
|      6 | C8                                          | -         |     1 | UMK105B7104KV-FR C3216X5R1A107M160AC TDK                                                                          | UMK105B7104KV-FR C3216X5R1A107M160AC TDK                                                                          | 100UF           | CAP; SMT (1206); 100UF; 20%; 10V; X5R; CERAMIC                                                             |
|      7 | C24                                         | -         |     1 | C1608X5R1H104K080AA TDK                                                                                           | C1608X5R1H104K080AA TDK                                                                                           | 0.1UF           | CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                                             |
|      8 | C26                                         | -         |     1 | C0603C225K9PAC; GRM188R60J225KE01; C1608X5R0J225K080AB KEMET;MURATA;TDK                                           | C0603C225K9PAC; GRM188R60J225KE01; C1608X5R0J225K080AB KEMET;MURATA;TDK                                           | 2.2UF           | CAP; SMT (0603); 2.2UF; 10%; 6.3V; X5R; CERAMIC;                                                           |
|      9 | C27                                         | -         |     1 | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; MURATA;MURATA; MURATA;TAIYO YUDEN;MURATA | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; MURATA;MURATA; MURATA;TAIYO YUDEN;MURATA | 4.7UF           | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                             |
|     10 | C28                                         | -         |     1 | GRM31CR71H475KA12L C0603C475K9PAC KEMET                                                                           | GRM31CR71H475KA12L C0603C475K9PAC KEMET                                                                           | 4.7UF           | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X5R; CERAMIC;                                                           |
|     11 | C29                                         | -         |     1 | C0402X7R500-222KNE; GRM155R71H222KA01; VENKEL LTD.; MURATA;TDK                                                    | C0402X7R500-222KNE; GRM155R71H222KA01; VENKEL LTD.; MURATA;TDK                                                    | 2200PF          | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                            |
|     12 | C30                                         | -         |     1 | C1005X7R1H222K050BA C0603C104K8RAC KEMET                                                                          | C1005X7R1H222K050BA C0603C104K8RAC KEMET                                                                          | 0.1UF           | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                                             |
|     13 | C31                                         | -         |     1 | C3216X5R1C476M160AB; GRM31CR61C476ME44 TDK;MURATA                                                                 | C3216X5R1C476M160AB; GRM31CR61C476ME44 TDK;MURATA                                                                 | 47UF            | CAP; SMT (1206); 47UF; 20%; 16V; X5R; CERAMIC                                                              |
|     14 | C32                                         | -         |     1 | C3216X5R1H106K160AB; GRM31CR61H106KA12 TDK;MURATA                                                                 | C3216X5R1H106K160AB; GRM31CR61H106KA12 TDK;MURATA                                                                 | 10UF            | CAP; SMT (1206); 10UF; 10%; 50V; X5R; CERAMIC                                                              |
|     15 | C34                                         | -         |     1 | GRM188R60J105KA01 MURATA                                                                                          | GRM188R60J105KA01 MURATA                                                                                          | 1UF             | CAP; SMT (0603); 1UF; 10%; 6.3V; X5R; CERAMIC;                                                             |
|     16 | DS3, DS10                                   | -         |     2 | LG L29K-G2J1-24 OSRAM                                                                                             | LG L29K-G2J1-24 OSRAM                                                                                             | LG L29K-G2J1-24 | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                                    |
|     17 | J1                                          | -         |     1 | PBC06DBAN SULLINS ELECTRONICS CORP.                                                                               | PBC06DBAN SULLINS ELECTRONICS CORP.                                                                               | PBC06DBAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; RIGHT ANGLE; 12PINS; 12PINS - ALTERNATE PIN NUMBERING            |
|     18 | J2                                          | -         |     1 | ZX62D-B-5P8 HIROSE ELECTRIC CO LTD.                                                                               | ZX62D-B-5P8 HIROSE ELECTRIC CO LTD.                                                                               | ZX62D-B-5P8     | CONNECTOR; MALE; SMT; MICRO UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 5PINS                      |
|     19 | JP1, JP3, JP11, JP13                        | -         |     4 | PBC03SAAN SULLINS                                                                                                 | PBC03SAAN SULLINS                                                                                                 | PBC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                           |
|     20 | JP2, JP8-JP10, JP14                         | -         |     5 | PBC02SAAN SULLINS ELECTRONICS CORP.                                                                               | PBC02SAAN SULLINS ELECTRONICS CORP.                                                                               | PBC02SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                  |
|     21 | JP4-JP7, JP12                               | -         |     5 | TSW-104-07-L-S SAMTEC                                                                                             | TSW-104-07-L-S SAMTEC                                                                                             | TSW-104-07-L-S  | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                          |
|     22 | L1                                          | -         |     1 | VLS201610ET-4R7M TDK                                                                                              | VLS201610ET-4R7M TDK                                                                                              | 4.7UH           | INDUCTOR; SMT; WIREWOUND CHIP; 4.7UH; TOL=+/-20%;                                                          |
|     23 | L2                                          | -         |     1 | SRP2010-2R2M BOURNS                                                                                               | SRP2010-2R2M BOURNS                                                                                               | 2.2UH           | 0.72A INDUCTOR; SMT; POWDERED IRON CORE; 2.2UH; TOL=+/-20%; 1.7A                                           |
|     24 | MISC3                                       | -         |     1 | MAXPICO2PMB# MAXIM                                                                                                | MAXPICO2PMB# MAXIM                                                                                                | MAXPICO2PMB#    | ACCESSORY; BRD; PACKOUT; MAXPICO2PMB ADAPTER BOARD                                                         |
|     25 | PB1                                         | -         |     1 | 1825910-6 TE CONNECTIVITY                                                                                         | 1825910-6 TE CONNECTIVITY                                                                                         | 1825910-6       | SWITCH; SPST; THROUGH HOLE; 24V; 0.05A; TACTILE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM; TE CONNECTIVITY |
|     26 | R1, R13, R15, R16                           | -         |     4 | ERJ-2RKF1001 PANASONIC                                                                                            | ERJ-2RKF1001 PANASONIC                                                                                            | 1K              | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                           |
|     27 | R2, R5, R10, R11, R39, R49,                 | -         |     7 | CRCW040210K0FK; VISHAY DALE;                                                                                      | CRCW040210K0FK; VISHAY DALE;                                                                                      | 10K             | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                          |
|     28 | R53 R12, R42                                | -         |     2 | RC0402FR-0710KL YAGEO PHICOMP CRCW0402499RFK VISHAY DALE                                                          | RC0402FR-0710KL YAGEO PHICOMP CRCW0402499RFK VISHAY DALE                                                          |                 | 499 RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                      |
|     29 | R17, R18, R20, R23-R25, R34, R35, R45, R46, | -         |    13 | ERJ-2GEJ104                                                                                                       | PANASONIC                                                                                                         | 100K            | RES; SMT (0402); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                         |
|     30 | R48, R50, R57 R51                           | -         |     1 | ERJ-2GE0R00 PANASONIC                                                                                             | ERJ-2GE0R00 PANASONIC                                                                                             |                 | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                              |

## MAX14750 EV System Bill of Materials (continued)

| ITEM   | REF_DES         | DNI/DNP   |   QTY | MFG PART #                  | MANUFACTURER                           | VALUE         | DESCRIPTION                                                                                                                                          |
|--------|-----------------|-----------|-------|-----------------------------|----------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 31     | R52             | -         |     1 | ERJ-2RKF5100                | PANASONIC                              | 510           | RES; SMT (0402); 510; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |
| 32     | R54, R56        | -         |     2 | WSL0805R1000FEA18           | VISHAY DALE                            | 0.1           | RES; SMT (0805); 0.1; 1%; +/-75PPM/DEGC; 0.1250W                                                                                                     |
| 33     | R58             | -         |     1 | 3296Y-1-253LF               | BOURNS                                 | 25K           | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 25K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
| 34     | R59             | -         |     1 | ERJ-2RKF1152                | PANASONIC                              | 11.5K         | RES; SMT (0402); 11.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                  |
| 35     | SPACER1-SPACER4 | -         |     4 | 9032                        | KEYSTONE                               | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                            |
| 36     | SU1-SU14        | -         |    14 | S1100-B;SX1100-B; STC02SYAN | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                              |
| 37     | TP6-TP13        | -         |     8 | 5003                        | KEYSTONE                               | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                  |
| 38     | TP14            | -         |     1 | 5000                        | KEYSTONE                               | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                     |
| 39     | TP20-TP24       | -         |     5 | 5011                        | KEYSTONE                               | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                              |
| 40     | TP25-TP30       | -         |     6 | 5001                        | KEYSTONE                               | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                   |
| 41     | U1              | -         |     1 | MAX14750AEWA+               | MAXIM                                  | MAX14750AEWA+ | IC; PWRM; POWER-MANAGEMENT SOLUTI0N; WLP25                                                                                                           |
| 42     | U2              | -         |     1 | OPA569AIDWPR                | TEXAS INSTRUMENTS                      | OPA569AIDWPR  | IC; AMP; RAIL-TO-RAIL I/O; POWER AMPLIFIER; WSOIC20-EP 300MIL                                                                                        |
| 43     | U3              | -         |     1 | MAX8880EUT+                 | MAXIM                                  | MAX8880EUT+   | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                                |
| 44     | U4              | -         |     1 | NC7WZ07P6X                  | FAIRCHILD SEMICONDUCTOR                | NC7WZ07P6X    | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                                             |
| 45     | PCB             | -         |     1 | MAX14750SYS                 | MAXIM                                  | PCB           | PCB:MAX14750SYS                                                                                                                                      |
| 46     | MISC1, MISC2    | DNI       |     2 | AK67421-0.5                 | ASSMANN                                | AK67421-0.5   | CONNECTOR; USB CABLE; MALE-MALE; USB_2.0; 5PINS-4PINS; 500MM                                                                                         |
| TOTAL  |                 |           |   129 |                             |                                        |               |                                                                                                                                                      |

## MAX14750 Evaluation System

## MAX14750 EV System Schematics

<!-- image -->

## MAX14750 EV System Schematics (continued)

<!-- image -->

## MAX14750 Evaluation System

## MAX14750 EV System Schematics (continued)

<!-- image -->

│

## MAX14750 EV System Schematics (continued)

<!-- image -->

## MAX14750 Evaluation System

## MAX14750 EV System PCB Layouts

<!-- image -->

MAX14750 EV System Component Placement Guide-Top Silkscreen

MAX14750 EV System PCB Layout-Top

<!-- image -->

MAX14750 EV System PCB Layout-Internal2

<!-- image -->

│

## MAX14750 Evaluation System

## MAX14750 EV System PCB Layouts (continued)

MAX14750 EV System PCB Layout-Internal3

<!-- image -->

MAX14750 EV System PCB Layout-Bottom

<!-- image -->

│

## MAX14750 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX14720/MAX14750
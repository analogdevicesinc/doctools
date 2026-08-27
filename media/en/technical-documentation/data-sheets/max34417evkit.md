<!-- lastmod 2022-08-03 -->
## MAX34417 Evaluation Kit

## General Description

The MAX34417 evaluation kit (EV kit) provides the hardware and  software  graphical  user  interface  (GUI)  necessary to  evaluate  the  MAX34417  SMBus  Four-Channel,  High Dynamic Range Power Accumulator. The EV Kit includes a MAX34417ENE+ installed EV board, as well as a microUSB cable to communicate with a PC.

Ordering Information appears at end of data sheet.

## MAX34417 EV Kit Photo

<!-- image -->

Windows XP is a registered trademark and registered service mark of Microsoft Corporation. Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## Features

- Easy Evaluation of the MAX34417
- USB-1 2 C/SMBus Interface
- PC, Laptop, or Tablet with Windows XP ® , Windows ® 7, 8, and 10 Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- Assembled circuit board including MAX34417ENE+
- Micro-USB cable

Evaluates: MAX34417

## MAX34417 Evaluation Kit

## MA34417 EV Kit Files

| FILE                                       | DECRIPTION          |
|--------------------------------------------|---------------------|
| MAX34417 Power Accumulator EV Kit Software | Application program |

## Quick Start

## Required Equipment

- One high-current DC power supply capable of supplying +3V to 15V up to at least 3A
- One digital multimeter for measuring the voltage
- PC, laptop, or tablet with Microsoft Windows XP, Windows 7, 8, and 10 compatible software
- Micro-USB cable (included in the EV kit box)
- Variable power resistor for measuring the power
- MAX34417 EV kit

## Procedure

The EV Kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Place the EV Kit hardware on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Ensure that all four jumpers on J3/J22 are installed.
- 3) Prior to starting the GUI, connect the J20 connector of the EV kit to a PC using the supplied micro-USB cable, the POWER LED (D20) should be green, and the COM LED (D21) should be red and slowly flash orange.
- 4) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the MAX34417 power accumulator EV kit software. Save the EV kit software to a temporary folder.
- 5) Install and open the MAX34417 power accumulator EV kit Software.
- 6) When the GUI appears, the text at the bottom-right corner of the window should display EV Kit Connected and the text at the bottom-left corner of the window should display Connected Mode . The COM LED (D21) changes to green.
- 7) Measure the potential from 3.3V and +3.3V test points to Ground and verify that it is within the range of 3.2V to 3.4V.
- 8) Measure the potential from 5V test point to Ground and verify that it is within the range of 4.8V to 5.2V.
- 9) Set the S1 switch to right side (fast position) and S2 switch to left side (power-on position).
- 10)  Make sure that the RSENSE (mΩ) , on Control/ Registers page under Sense Resistors , shows 10.00.
- 11)  With the output set to +3.8V and disabled, connect the positive terminal of the power supply to the IN1\_P (SOURCE pin of the J1A) of the EV kit and connect the ground terminal to the GND header.
- 12)  Tune variable Power Resistor to 38Ω and then connect it between the IN1\_N (RETURN pin of the J1A) of the EV kit and GND connector of the EV kit.
- 13)  On Monitor/Graph page of the GUI, under Read Options , set the Polling Rate to 2.5 seconds.
- 14)  Turn on the power supply. Click Auto Poll and verify the voltage and average power.
- 15)  Repeat steps 11 to 14 for IN2, IN3, and IN4. Note: All 4 channels could be tested simultaneously by connecting four +3.8V DC supplies to the IN1\_P , IN2\_P , IN3\_P , and IN4\_P , and connecting four power resistors to IN1\_N , IN2\_N , IN3\_N , and IN4\_N . If using one DC power source for all 4 channels, make sure that the DC power supply is capable of supplying the total current.
- 16)  Change the position of S1 switch to left side (slow position) or slide the Slow Enable , on the Modes window of the GUI, for Slow mode verification.
- 17)  Slide Park Enable , on the Modes window of the GUI, for park on any of the four channels measurement.
- 18)  Change the position of S2 switch to right side (power-off position) and verify that the Auto Poll stops polling.

Evaluates: MAX34417

│

## Detailed Description

The  MAX34417  automatically  sequences  through  the channels to collect samples from the common-mode voltage and the current-sense amplifiers. The 16-bit current value and the 14-bit voltage value are then multiplied to create a 30-bit  power  value  that  is  then  written  to  the  power accumulator.  The  MAX34417  contains  a  56-bit  power accumulator for each channel. This accumulator is updated 1024 times per second. When the host is ready to pull the  latest  accumulation  data,  it  first  sends  the  UPDATE command that causes the MAX34417 to load the latest accumulation data and accumulation count into the internal MAX34417 registers  so  the  host  can  read  them  at  any time. This type of operation allows the host to control the accumulation period. The only constraint is that the host should access the data before the accumulators can overflow. If the accumulators overflow, they do not roll over.

The MAX34417 contains a 14-bit ADC for voltage and a 13-bit ADC for current. During each sample time, a 14-bit voltage sample and a 16-bit current sample are resolved. To create a 16-bit current value from the 13-bit ADC, the device  takes  two  current  samples;  one  with  the  current sense  amplifier  in  a  high-gain  mode  and  another  with the amplifier in a low-gain mode. The high gain setting is 8  times  the  low-gain  setting.  Based  on  the  two  currentsense ADC  results,  the  device  determines  which  result provides  the  best  accuracy  and  fills  the  16-bit  current sample accordingly.

## Detailed Description of Software

## Software Startup

If the MAX34417 EV kit is connected when the software is  opened,  the  software  first  detects  the  hardware  to communicate.  Next,  the  software  searches  for  all  slave addresses on the I 2 C bus and connects to the first slave address  that  is  valid.  Then,  the  GUI  displays EV  Kit Connected at the bottom-right corner of the window and Connected Mode at the bottom-left of the window. If the EV kit is not connected on software startup, the GUI populates with default GUI configuration and displays EV Kit not detected at the bottom-right corner and Demo Mode at the bottom-left corner of the window. Once the EV kit is connected, the GUI searches for slave addresses.

## Menu Items

The Device menu item allows the user to connect to a desired device. Find Slave Addresses searches for all slave  addresses  connected  to  the  I 2 C  bus.  To  select  a device,  click Select  Slave  Address and  all  the  slave addresses found are shown and are selectable. The GUI

detects the slave address and automatically checks the first slave address it finds, and since the EV kit has only one device, user doesn't have to worry about the selection. The File menu is used to save measured data while Help menu can link users to the Maxim website.

## Status Log

The status log below the tabs displays all the actions the GUI performs. Whenever a SMBus command is read or written, the action is confirmed by the log. The log can be cleared by clicking on the Clear Log button.

## Monitor/Graph Tab

The Monitor/Graph tab  (Figure  1)  displays  all  the accumulator  values.  In  the Monitor group  box  table, the Polled values are the Accumulator values read from PWR\_ACC\_1  to  PWR\_ACC\_4  that  are  converted  to amps using the RSENSE value in the Sense Resistors table on Control/Registers tab of the GUI (Figure 2). The Sampled Voltage and Average Power columns track the voltage and average power of the Polled value for each channel. All values on the tab are read when the tab is selected  or  when  the Read button  is  clicked.  The OC status bits are cleared after every read. Check the Auto Poll checkbox to continuously read with the Polling Rate .

The Data Log Controls group  box  contains  the  graphrelated  controls. Graph  Points displays  the  number  of reads that have been tracked in the data log. To reset the Poll Count , click on the Data Log Reset button. The Data log reset button clears the graph log which includes the graph points recorded and the data logged for the graph thus far. The Average Power/Voltage button selects the average power or voltage to be graphed.

## Control/RegistersTab

The Control/Registers tab  (Figure  2)  displays  all  the SMBus  commands  and  their  current  values.  In  the Control group box table, the RSENSE (mΩ) column  is the  value  of  the  resistor  (R3X-R4X)  between  IN\_P  and IN\_N signals. The Max Current (A) column displays the maximum current threshold converted to amps using the RSENSE value.

Figure 1. MAX34417EV Kit Software-Monitor/Graph Tab

<!-- image -->

Figure 2. MAX34417EV Kit Software-Control/Registers Tab

<!-- image -->

## MAX34417 Evaluation Kit

## Troubleshooting

All efforts were made to ensure that each EV kit works on the first try, right out-of-the-box. In the rare occasion that a problem is suspected, see Table 2 to help troubleshoot the issue.

## Table 1. Description of LEDs (D20, D21)

| LED         | COLOR   | DESCRIPTION                                                                                                                 |
|-------------|---------|-----------------------------------------------------------------------------------------------------------------------------|
| D20 (POWER) | Red     | USB Power Fault: Afault occurred due to overvoltage limit, current limit, or thermal limit.                                 |
| D20 (POWER) | Green   | USB Power: USB power supply is on.                                                                                          |
| D21 (COM)   | Red     | Communication: After the software has initialized the hardware, the LED flashes red when a command from the PC is received. |
| D21 (COM)   | Green   | Initialized: Hardware has been initialized by software.                                                                     |

## Table 2. Troubleshooting

| SYMPTOM                                                              | CHECK                            | SOLUTION                                                                                                                                                          |
|----------------------------------------------------------------------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI indicates: EV Kit Not Connected Device not found.                | Is the LED labeled D20 red?      | If yes, then the electronic fuse is in a fault state. Inspect for electrical shorts on the PCB and make sure that the PCB is not sitting on a conductive surface. |
| GUI indicates: EV Kit Not Connected Device not found.                | Are any of the LEDs illuminated? | If not, then the PCB may not be getting power from the USB. Try a different USB cable or a different USB port.                                                    |
| GUI indicates: Read Failed! and all slave addresses are being found. | J23/22                           | Make sure all four jumpers on J3/J22 are populated.                                                                                                               |

│

Evaluates: MAX34417

## Component Suppliers

| SUPPLIER                   | WEBSITE                              |
|----------------------------|--------------------------------------|
| TDK                        | http://www.tdk.com/                  |
| Taiyo Yuden                | http://www.t-yuden.com/              |
| Murata                     | http://www.murata.com/               |
| Vishay Dale                | http://www.vishay.com/               |
| Koa Speer Electronics Inc. | http://www.koaspeer.com/             |
| Keystone Electronics       | http://www.keyelco.com/              |
| Del-Tron                   | http://deltron.com/                  |
| King bright                | http://www.kingbrightusa.com/        |
| Panasonic                  | https://na.industrial.panasonic.com/ |
| Phoenix Contact            | http://www.phoenixcontact.com/       |
| 3M                         | http://www.3m.com/                   |
| Molex                      | http://www.molex.com/                |
| TE Connectivity            | http://www.te.com/usa-en/home.html   |
| Microchip                  | http://www.microchip.com/            |
| Kyocera                    | http://www.kyocera.com/              |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX34417EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX34417

## MAX34417 Evaluation Kit

## MAX34417 EV Kit Bill of Materials

| Comments                                                                                                                                                                             |                                                             |                                                                                                                                         |                                                         |                                                                                          |                                                                                                             |                                                                                                                               |                                                                                                          |                                                                                                        |                                                                                                            |                                                                                                                                                 |                                                                          |                                                                                                                                         |                                                                                           |                                                                                                                |                                                                                                   |                                                                      |                                                     |                                                                                                                                                                           |                                                                 | Blank Internal Part       | Programmed Internal Part Number: EICP3900HU1                                        |                                                                  |                                                 |                              |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|---------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------|------------------------------|
| Number Part DiGi-Key 36-5010-ND                                                                                                                                                      | 36-5012-ND                                                  | 445-5827-2-ND                                                                                                                           | 587-2980-2-ND                                           |                                                                                          | 490-1652-2-ND 445-14539-2-ND                                                                                | 445-1350-2-ND                                                                                                                 | 754-1093-2-ND                                                                                            | DB2W31900LTR-ND                                                                                        | 36-5011-ND                                                                                                 | 277-1269-ND                                                                                                                                     | 961104-6804-AR-ND                                                        | WM1399TR-ND                                                                                                                             | 541-0.0TBTR-ND 541-2.20KCTR-ND                                                            | P10MTR-ND                                                                                                      | 541-560CTR-ND                                                                                     | 541-100KCTR-ND                                                       | 541-45.3KCTR-ND 541-10.0KCTR-ND                     | 541-4.70KTTR-ND 450-1598-ND                                                                                                                                               |                                                                 |                           | PIC18LF2550-I/SO-ND                                                                 |                                                                  |                                                 | 478-4790-2-ND                |
| Manufacturer KEYSTONE                                                                                                                                                                | KEYSTONE                                                    | TDK                                                                                                                                     | N/A                                                     | TAIYO YUDEN                                                                              | MURATA TDK                                                                                                  | TDK                                                                                                                           | KINGBRIGHT                                                                                               | PANASONIC                                                                                              |                                                                                                            | KEYSTONE                                                                                                                                        | PHOENIX CONTACT 3M                                                       | MOLEX N/A                                                                                                                               | VISHAY DALE                                                                               | VISHAY DALE                                                                                                    | PANASONIC N/A                                                                                     | VISHAY DALE                                                          | VISHAY DALE VISHAY DALE VISHAY DALE                 | VISHAY DALE INC ELECTRONICS SPEER KOA                                                                                                                                     | N/A TE CONNECTIVITY                                             | MAXIM                     | Microchip                                                                           | MAXIM MAXIM                                                      | AVX CORP/KYOCERA                                | CORP MAXIM                   |
| Number Part Manufacturer 5010                                                                                                                                                        | 5012                                                        | CGA4J2X7R2A104K125AA                                                                                                                    | N/A                                                     | EMK212ABJ106KD-T                                                                         | GRM21BR72A103KA01 C2012X7R1H105K085AC                                                                       | C2012X7R1H224K125AA                                                                                                           |                                                                                                          | APHBM2012SURKCGKC DB2W31900L                                                                           |                                                                                                            | 5011                                                                                                                                            | 1714955 961104-6804-AR                                                   | 105017-0001                                                                                                                             | N/A CRCW08050000Z0EAHP                                                                    | CRCW08052K20FK                                                                                                 | ERJM1WSF10M N/A                                                                                   | CRCW0805560RFK                                                       | CRCW0805100KFK CRCW080545K3FK CRCW080510K0FK        | CRCW08054K70FK RK73H2ATTD3300F                                                                                                                                            | N/A 1825115-1                                                   | MAX34417ENE+              | PIC18LF2550-I/SO                                                                    | MAX4995AAUT+ MAX8902BATA+                                        | KC3225A48.0000C30E00                            | MAX34417                     |
| MAXINV 02-TPMINI5010-00                                                                                                                                                              | 02-TPMINI5012-00                                            | 20-000U1-CA82                                                                                                                           | N/A                                                     | 20-0010U-23A                                                                             | 20-00U01-E9 20-0001U-04                                                                                     |                                                                                                                               | 20-00U22-04                                                                                              | 30-APHBM2012SURKCGKC-00 30-DB2W31900L-00                                                               | 02-TPMINI5011-00                                                                                           |                                                                                                                                                 | 01-17149552P-25 01-9611046804AR4P-19                                     | 01-10501700015P-26                                                                                                                      | N/A 80-0000R-BA47                                                                         | 80-002K2-AA28                                                                                                  | 80-00R01-BA88 N/A                                                                                 | 80-0560R-25                                                          | 80-0100K-25 80-045K3-25 80-0010K-25                 | 80-004K7-AA28 80-0330R-BA89                                                                                                                                               | N/A                                                             | 11-SLS121PC04-00 MAX34417 | 89-3900H#K02,U20                                                                    | 10-MAX4995AAUT-U                                                 | 10-MAX8902BATA-T 60-0048M-0CH                   | EPCB34417                    |
| Description TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; NOT FOR COLD TEST TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; RECOMMENDED FOR BOARD | N/A THICKNESS=0.062IN;                                      | BANANA 4MM SOCKET; RIGHT ANGLE; 2PINS CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR - EVKIT        | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R | 0.01UF CAPACITOR; SMT (0805); CERAMIC CHIP; 0.01UF; 100V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (0805); CERAMIC CHIP; | 0.22UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R DIODE; LED; SMD CHIP LED LAMP; RED-GREEN; | SMT; VF=2.5V; IF=0.02A DIODE; SCH; SMT (MINI2-F3-B); PIV=30V; IF=3A TEST POINT; PIN DIA=0.125IN; TOTAL | LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD | THICKNESS=0.062IN; NOT FOR COLD TEST CONNECTOR; FEMALE; THROUGH HOLE; PCB TERMINAL BLOCK; RIGHT ANGLE; 2PINS CONNECTOR; MALE; THROUGH HOLE; 961 | N/A SERIES 2.54MM PITCH; 2.54 MM X 2.54 MM; SOLDER TAIL; STRAIGHT; 4PINS | CONNECTOR; FEMALE; SMT; MICRO-USB B RECEPTACLE; RIGHT ANGLE; 5PINS DNP CONNECTOR; MALE; THROUGH HOLE; PIN STRIP HEADER; STRAIGHT; 2PINS | RESISTOR; 0805; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM RESISTOR; 0805; 2.2K OHM; 1%; 100PPM; | 0.125W; THICK FILM RESISTOR; 2512; 0.01 OHM; 1%; 100PPM; 1W; METAL STRIP EVKIT - RESISTOR 2512 OUTLINE PACKAGE | RESISTOR, 0805, 560 OHM, 1%, 100PPM, 0.125W, THICK FILM RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; | THICK FILM RESISTOR; 0805; 45.3K OHM; 1%; 100PPM; 0.125W; THICK FILM | RESISTOR; 0805; 10K; 1%; 100PPM; 0.125W; THICK FILM | 0805; 4.7K OHM; 1%; 100PPM; THICK FILM RESISTOR; 0805; 330 OHM; 1%; 100PPM; 0.25W; THICK FILM EVKIT - RESISTOR 0805 OUTLINE PACKAGE SWITCH; SPDT; THROUGH HOLE; VERTICAL; | 125V; 0.25A; SLIDE SWITCH; RCOIL=0.06 OHM; RINSULATION=500M OHM | MAX34417ENE+              | SOIC127P1030X265-28N IC+,PRGM,89-3900H#K02,U20 IC; SWTC; 50MA TO 600MA PROGRAMMABLE | CURRENT-LIMIT SWITCH; SOT23-6 IC; VREG; LOW-NOISE LDO REGULATOR; | TDFN8 2X2 OSCILLATOR; SMT (3225) 3.2X2.5; 15PF; | 48MHZ; +/-50PPM PCB:MAX34417 |
| Value N/A                                                                                                                                                                            |                                                             | 0.1UF                                                                                                                                   | DNP                                                     | 10UF                                                                                     | 1UF                                                                                                         |                                                                                                                               | 0.22UF                                                                                                   | N/A N/A                                                                                                | N/A                                                                                                        | N/A                                                                                                                                             |                                                                          | N/A                                                                                                                                     | 0                                                                                         | 2.2K                                                                                                           | 0.01 DNP                                                                                          | 560 100K                                                             | 45.3K 10K                                           | 4.7K RESISTOR; 0.125W; 330 DNP                                                                                                                                            | N/A                                                             | N/A                       | N/A N/A                                                                             | N/A                                                              |                                                 | N/A PCB                      |
| Quantity 4                                                                                                                                                                           | 21                                                          | 3                                                                                                                                       | 13                                                      | 3                                                                                        | 2 1                                                                                                         | 1                                                                                                                             |                                                                                                          | 2 1                                                                                                    | 3                                                                                                          | 4                                                                                                                                               | 2                                                                        | 1 1                                                                                                                                     | 16                                                                                        | 3 4 4                                                                                                          | 2                                                                                                 | 1                                                                    | 1 1                                                 | 1 2 2                                                                                                                                                                     | 2                                                               | 1 1                       | 1                                                                                   | 1                                                                |                                                 | 1 1                          |
| Reference 5V, VIO, 3.3V, +3.3V SCL, SDA, /PDN,                                                                                                                                       | ADDR, IN1+-IN4+, IN1--IN4-, SLOW, IN1_N-IN4_N, IN1_P- IN4_P | C1, C3, C212                                                                                                                            | C2, C4-C6, C1A, C1B, C1C, C1D, C2A, C2B, C2C, C2D, C215 | C201, C202, C204                                                                         | C203, C214 C211                                                                                             | C213                                                                                                                          |                                                                                                          | D20, D21 D22                                                                                           | GND, TP1, TP17                                                                                             | J1A, J1B, J1C, J1D                                                                                                                              | J3, J22                                                                  | J20 J21                                                                                                                                 | R1, R2, R5-R7, R1A, R1B, R1C, R1D, R2A, R2B, R2C, R2D, R201, R202, R214                   | R3, R4, R213 R3A, R3B, R3C, R3D                                                                                | R4A, R4B, R4C, R4D R203, R205                                                                     | R204                                                                 | R206 R207                                           | R210 R211, R212 R215, R216                                                                                                                                                | S1, S2                                                          | U1 U20 Should be          | programmed                                                                          | U21                                                              | U22 X1                                          | PCB                          |
| Item 1                                                                                                                                                                               | 2                                                           | 4                                                                                                                                       | 5                                                       | 6                                                                                        | 7 8                                                                                                         | 9                                                                                                                             | 10                                                                                                       | 11                                                                                                     | 12                                                                                                         | 13                                                                                                                                              |                                                                          | 14 15 16                                                                                                                                | 17                                                                                        | 18 19                                                                                                          | 20 21                                                                                             |                                                                      | 22 23 24                                            | 25 26 27                                                                                                                                                                  | 28                                                              | 29 30                     |                                                                                     | 31                                                               | 32 33                                           | 34                           |

Evaluates: MAX34417

## MAX34417 EV Kit Schematic

<!-- image -->

## MAX34417 EV Kit Schematic (continued)

<!-- image -->

## MAX34417 EV Kit PCB Layout Diagrams

MAX34417 EV Kit-Top Silkscreen

<!-- image -->

MAX34417 EV Kit-Top

<!-- image -->

MAX34417 EV Kit-Bottom

<!-- image -->

MAX34417 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX34417 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX34417
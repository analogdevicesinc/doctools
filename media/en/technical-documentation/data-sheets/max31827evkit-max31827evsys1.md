<!-- lastmod 2022-08-05 -->
<!-- image -->

Evaluates: MAX31827/8/9

## General Description

The MAX31827 evaluation system (EV system) demonstrates the MAX31827 I2C temperature switch and sensor with hardware-selectable address and alarm. The EV system includes the MAX31827 evaluation kit (EV kit) and the USB2PMB2  module.  Windows ®   7/8/8.1/10-compatible software  provides  a  user-friendly  interface  that  demonstrates the features of the MAX31827/8/9. The MAX31827 EV kit comes with the 6-pin WLP MAX31827ANTABRPF+ installed.

## Features

- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP, Windows 7/8/8.1/10-Compatible Software

## MAX31827 EV System Board Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

## MAX31827 Evaluation System

## Quick Start

## Required Equipment

- MAX31827 EV system (USB cable included)
- Windows PC
- MAX31827GUISetup.msi file

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

Ordering Information appears at end of data sheet.

319-100784; Rev 1; 3/22

## MAX31827 Evaluation System

## Procedure

The  EV  system  is  fully  assembled  and  tested.  Use  the following steps to verify board operation:

- 1) Install the MAX31827GUISetup.msi software on a computer.
- 2) Align the connector of the USB2PMB2 with the J1 connector of the MAX31827 EV kit. Figure 1 shows the side view of how the two boards are connected. The USB2PMB2 is on the left and the MAX31827 EV kit is on the right.
- 3) Verify that the shunts are in the default position as shown in Table 1.
- 4) Connect the USB cable from the PC to the USB2PMB2 board.

## Evaluates: MAX31827/8/9

- 5) Open the EV kit GUI, MAX31827EVKit.exe (Figure 2).
- 6) Click the Scan Adapters button. Then select the option PMODxxxxxx (where xxxxxx is numeric) and click the Connect button.
- 7) Click the Detect Address button, and the 0b1000010 bits appear in the A5-A0 edit box.
- 8) Adjust the Conversion to 111-125ms within the Configuration Register group box.
- 9) Verify the configuration register is set by clicking the Read Registers button.
- 10)  Start evaluating the MAX31827 by clicking the Start Sampling button. Figure 3 shows the MAX31827 measuring temperature.

Figure 1. MAX31827 Side View

<!-- image -->

Figure 2. MAX31827 Main Window

<!-- image -->

│

## MAX31827 Evaluation System

Evaluates: MAX31827/8/9

Figure 3. Measuring Temperature on the MAX31827

<!-- image -->

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                 |
|----------|------------------|-------------------------------------------------------------|
| J2       | 1-2              | User-supplied VPU. Connects VPU to power the MAX31827 (U1). |
| J2       | 2-3*             | Connects VCC to power the MAX31827 (U1).                    |
| J3       | 1-2              | Not in Use                                                  |
| J3       | 2-3*             | Not in Use                                                  |
| J4       | 1-2              | Connects VPU to the pullup resistors for SDAand SCL         |
| J4       | 2-3*             | Connects VCC to the pullup resistors for SDAand SCL         |

*Default position.

│

## Detailed Description of Software

The main window of the MAX31827 EV kit software contains controls to evaluate the MAX31827 IC.

## Configuration Register

The Configuration Register groupbox allows the user to select the resolution, conversion rate, alarm polarity, and fault queue. Use the Resolution drop-down list to select between  8-,  9-,  10-,  and  12-bits  resolution.  With  each resolution,  the  user  can  set  the  desired  sampling  rate using the options in the Conversion drop-down list. The alarm polarity can be adjusted between high-active and low-active. In addition, users can set the fault queue from 1, 2, 4, or 8 consecutive faults.

## High and Low Fault

Adjust the TH (Temperature High) and TL (Temperature Low) edit  boxes  to  the  desired  temperature  threshold. When the desired setting is set, click the Write Registers button to apply. When the ALARM output asserts in comparator  mode,  the Over  Temp or Under  Temp indicator  displays  red  until  the  temperature  returns  within  the threshold range.

When the ALARM output  asserts  in  interrupt  mode,  the Over Temp or Under Temp indicator displays red until the read is performed on configuration register.

The ALARM also appears at the ALARM pin of the IC. To check if the signal is high or low, use the Check button for the alarm status.

## Address

The address is determined by the resistor/connection on RSEL pins of the MAX31827. Detect Address loads bits to status register. Refer to the IC data sheet for the list of addresses. Addresses are displayed on the A5-A0 dropdown list. Once the desired address is selected, click the Set Address button to apply.

## Temperature

The temperature is displayed in the graph, hexadecimal code, and converted temperature by clicking on the Start Sampling Continuously or Read Once button.

Pmod is a trademark of Digilent Inc.

## Logging Data

The  temperature  and  raw  code  can  be  saved  to  a  file. Click the Export to *.CSV button before collecting data.

## Detailed Description of Hardware

The MAX31827 EV system demonstrates the MAX31827, I2C  temperature  sensor  with  address  and  alarm.  The USB2PMB2 module and the EV kit complete the system.

## User-Supplied I 2 C and I/O

To evaluate the EV kit with a user-supplied I 2 C bus, the connector  J1  is  a  PMod™-compatible  connector.  If  the master does not have a PMod-compatible connector, then make connection directly to the SCL and SDA test points. Make sure  the  return  ground  is  same.  See  Table  1  for jumper user-supplied VCC.

The MAX31827 is powered through USB by default when a  PMod-compatible  master  module  is  connected  to  the J1  connector  of  the  EV  kit.  If  the  user-supplied  VCC  is used,  a  PMod  master  module  is  not  allowed  on  the  J1 connector.  In  this  case,  apply  a  voltage  between  +1.6V and +3.6V at the VCC test point and ground is connected at the GND test point.

## User-Supplied VPU

The J2 jumper allows the user to apply their own pullup voltage. When a shunt is on the 1-2 position, apply a voltage between +1.6V and +3.6V at the VPU test point and verify the return path is connected at the GND test point.

## Ordering Information

| PART            | TYPE                              |
|-----------------|-----------------------------------|
| MAX31827EVSYS1# | EV system (EV kit + Master Board) |
| MAX31827EVKIT#  | EV kit                            |
| USB2PMB2#       | Master Board                      |

#Denotes RoHS compliance.

## MAX31827 EV System Bill of Materials

|   ITEM |   QTY | REF DES                                   | MAXINV                 | MFG PART #                                                                                                                                       | MANUFACTURER                                     | VALUE              | DESCRIPTION                                                                                                                                                                       |
|--------|-------|-------------------------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     7 | ALMB0, ALMB1, RSEL0, RSEL1, SCL, SDA, VPU | 02-TPCOMP5007- 00      | 5007                                                                                                                                             | KEYSTONE                                         | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|      2 |     2 | C1, C2                                    | 20-000U1-03            | 885012206071; CGJ3E2X7R1E104K080AA; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A; CGA3E2X7R1E104K080AA | WURTH ELECTRONICS INC; TDK; TDK; KEMET; AVX; TDK | 0.1UF              | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC                                                                        |
|      3 |     2 | D1, D2                                    | 30-LTSTC190CK T-00     | LTST-C190CKT                                                                                                                                     | LITE-ON ELECTRONICS INC.                         | LTST- C190CKT      | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                                                                                   |
|      4 |     2 | GND, GND1                                 | 02-TPCOMP5006- 00      | 5006                                                                                                                                             | KEYSTONE                                         | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|      5 |     1 | J1                                        | 01-TSW10608SD RA12P-17 | TSW-106-08-S-D-RA                                                                                                                                | SAMTEC                                           | TSW-106-08- S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHTANGLE; 12PINS; THIS PART IS DEDICATED FOR PMOD PERIPHERAL BOARD                                                                         |
|      6 |     3 | J2-J4                                     | 01-TSW10307TS3 P-17    | TSW-103-07-T-S                                                                                                                                   | SAMTEC                                           | TSW-103-07- T-S    | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                                                  |
|      7 |     2 | R1, R2                                    | 80-0001K-24            | CRCW06031K00FK; ERJ-EKF1001; CR0603AFX-1001ELF                                                                                                   | VISHAY; PANASONIC; BOURNS                        | 1K                 | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                 |
|      8 |     1 | R3                                        | 80-0634K-10            | ERJ-3EKF6343                                                                                                                                     | PANASONIC                                        | 634K               | RES; SMT (0603); 634K; 1%; +/- 100PPM/DEGC; 0.1W                                                                                                                                  |
|      9 |     1 | R4                                        | 80-080K6-24            | CRCW060380K6FK; ERJ-3EKF8062; RC0603FR-0780K6L                                                                                                   | VISHAY; PANASONIC; YAGEO                         | 80.6K              | RESISTOR; 0603; 80.6K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                          |
|     10 |     2 | R5, R6                                    | 80-004K7-19            | CRCW06034K70FK                                                                                                                                   | VISHAY DALE                                      | 4.7K               | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                               |
|     11 |     1 | U1                                        | 00-SAMPLE-01           | MAX31827ANTABRPF+                                                                                                                                | MAXIM                                            | MAX31827AN TABRPF+ | EVKIT PART - IC; MAX31827; WLP6; PACKAGE OUTLINE DRAWING: 21-100515; PACKAGE CODE: N61B1+1                                                                                        |
|     12 |     1 | VCC                                       | 02-TPCOMP5005- 00      | 5005                                                                                                                                             | KEYSTONE                                         | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN                      |
|     13 |     1 | PCB                                       | EPCB31827              | MAX31827                                                                                                                                         | MAXIM                                            | PCB                | PCB:MAX31827                                                                                                                                                                      |

Evaluates: MAX31827/8/9

## MAX31827 Evaluation System

## MAX31827 EV System Schematic

<!-- image -->

## MAX31827 Evaluation System

## MAX31827 EV System PCB Layouts

<!-- image -->

MAX31827 EV System Component Placement Guide-Top Silkscreen

MAX31827 EV System PCB Layout-Top

<!-- image -->

MAX31827 EV System PCB Layout-Bottom

<!-- image -->

│

## MAX31827 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------|-----------------|
|                 0 | 6/21            | Initial release                                  | -               |
|                 1 | 3/22            | Updated General Description section and DS title | 1-8             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX31827/8/9
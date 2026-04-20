<!-- lastmod 2026-02-06 -->
<!-- image -->

## Evaluates: MAX31888

## General Description

The MAX31888 evaluation system (EV system) demonstrates the MAX31888 1-Wire ®  temperature sensor with alarm function. The MAX31888 EV system includes the MAX31888  evaluation  kit  (EV  kit)  and  the  USB2PMB2 module. Windows ®  7/8/8.1/10 -compatible software provides a user-friendly interface that demonstrates the features of the MAX31888.

The  MAX31888  EV  kit  contains  an  on-board  DS2484 I 2 C  to 1-Wire converter and comes with the 6-pin µDFN MAX31888ALT+T installed.

## MAX31888 EV Kit Files

| FILE                                   | DESCRIPTION             |
|----------------------------------------|-------------------------|
| MAX31888_uDFN_ EVKIT _A_SCHEMATI C     | EVKIT SCHEMATIC         |
| MAX31888_uDFN_ EVKIT _A _MARKETING_PCB | EVKIT PCB LAYOUT        |
| BUILD_BOM_ MAX31888_uDFN_ EVKIT _A     | EVKIT BILL OF MATERIALS |
| MAX31888_uDFN_ EVKIT _A_ODB            | EVKIT ODB               |

Note: EVKIT design files are attached at the end of this document.

## Quick Start

## Required Equipment

- MAX31888 EV system (USB cable included)
- Windows PC
- MAX31888GUISetup.msi file

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV system is fully assembled and tested. Follow the steps to verify board operation:

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Download the software from www.analog.com/en/ resources/evaluation-hardware-and-software/ evaluation-boards-kits/max31888evsys and extract it to a temporary folder.

1-Wire is a registered trademark of Maxim Integrated Products, Inc. Windows is a registered trademark of Microsoft Corporation.

Pmod™' is a trademark of Digilent Inc.

## MAX31888 Evaluation System

## Features

- On-Board I 2 C  to 1-Wire Converter (DS2484)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows 7/8/8.1/10-Compatible Software

Ordering Information appears at end of data sheet.

- 2) Install the MAX31888GUISetup.msi software on a computer.
- 3) Align the X2 connector of the USB2PMB2 with the J1 connector of the MAX31888 EV kit.
- 4) Verify that the shunts are in the default position as shown in Table 1.
- 5) Connect the USB cable from the computer to the USB2PMB2 board.
- 6) Open the EV kit GUI, MAX31888EvaluationKitTool. exe (Figure 1).
- 7) Click the Scan Adapters button. Then select the option PMODxxxxxx (where xxxxxx is numeric) and click the Connect button.
- 8) Click the Convert T button.
- 9) Click the Read button. Figure 2 shows the measured temperature.

319-100839; Rev 2; 2/26

Evaluates: MAX31888

Figure 1. MAX31888 Main Window

<!-- image -->

Figure 2. Measuring Temperature on the MAX31888

<!-- image -->

│

## General Description of Software

The main window of the MAX31888 EV kit software contains controls to evaluate the MAX31888 IC.

## FIFO Controls

The FIFO Controls groupbox  allows  the  user  to  select the FIFO Status Clear , Almost Full Type , FIFO Rollover , and Almost Full Setting .  Click  the  checkbox to enable them  and  click  again  to  disable.  The Data  Counter shows  the  quantity  of  the  data  stored  in  the  FIFO  and the Overflow  Counter shows  the  quantity  the  data overflowed.

Click Set to apply the above settings.

Click Read to confirm the settings.

Click Flush to clear the FIFO data.

## Alarm Thresholds

Adjust the High Threshold (Temperature High) and Low Threshold (T emperature Low) edit boxes to the desired temperature  threshold.  When  the  desired  setting  is  set, click  the Set button  to  apply.  Click  the Read button  to confirm they are set correctly.

## Status Register

The High  Temp or Low Temp fault  status  bit  displays red when the Read button is clicked and the temperature exceeds the threshold range.

The Almost  Full fault  status  bit  displays  red  when the Read button  is  clicked  and  the  FIFO  data  quantity exceeds 32 minus Almost Full Setting .

The Temp  Ready status  bit  displays  green  when  the Read button is clicked and temp data has been converted.

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                          |
|----------|------------------|--------------------------------------|
| J1       | 1-2*             | Connects VCC (onboard power supply)  |
| J1       | 2-3              | Connects VPU (external power supply) |

* Default position.

## ROM

The  controls  within  the Commands groupbox  include Convert T , Reset , Match ROM , and Skip ROM .

## Temperature

The temperature is displayed in a graph. View hexadecimal code and converted temperature by clicking on the Read button.

## Logging Data

The  temperature  and  raw  code  can  be  saved  to  a  file. Click the Export to *.CSV button before collecting data.

## General Description of Hardware

The MAX31888 EV system demonstrates the MAX31888, a 1-Wire temperature sensor with alarm. The USB2PMB2 module and the EV kit complete the system. The DS2484 acts as the 1-Wire master for the MAX31888 and as an I 2 C slave for the USBPMBP2.

## User-Supplied I 2 C and I/O

To evaluate the EV kit with a user-supplied I 2 C bus, use connector J1 which is a  PMod™-compatible connector. If the master does not have a PMod-compatible connector, then make the connection directly to the SCL and SDA test points. Make sure the return ground is the same as the DS2484.

## User-Supplied VPU

The MAX31888 is powered through USB by default when a  PMod-compatible  master  module  is  connected  to  the J1  connector  of  the  EV  kit.  If  the  user-supplied  VPU  is used, change J6 jumper position from default to 2-3 and apply a voltage between +1.7V and +3.6V at the VPU test point and ensure that ground  is connected at the GND test point.

Evaluates: MAX31888

## MAX31888 Evaluation System

## Component Suppliers

| SUPPLIER                 | PHONE             | WEBSITE                              |
|--------------------------|-------------------|--------------------------------------|
| KEYSTONE                 | (516) 328-7500    | https://www.keyelco.com/             |
| WURTH ELECTRONICS INC    | +1 877 6902207    | https://www.we-ics.com               |
| TDK                      | +81 3 67 78 10 00 | https://www.tdk-electronics.tdk.com/ |
| KEMET                    | +91-95131-45888   | https://www.kemet.com/en/us.html     |
| AVX                      | +1 (864) 967-2150 | https://www.avx.com/                 |
| LITE-ON ELECTRONICS INC. | 0515-83368598     | https://www.liteon.com/en-us         |
| SAMTEC                   | 1-800-726-8329    | https://www.samtec.com/              |
| VISHAY                   | 1-800-344-4539    | https://www.vishay.com/              |
| PANASONIC                | 0571-87257895     | https://panasonic.cn/                |
| BOURNS                   | +1 951-781-5500   | https://www.bourns.com/              |
| YAGEO                    | +886 2 6629 9999  | https://www.yageo.com/en/Home        |
| ANALOG DEVICES           | 408-601-1000      | https://www.analog.com               |

Note:

Indicate that you are using the MAX31888 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE                              |
|----------------|-----------------------------------|
| MAX31888EVSYS# | EV System (EV Kit + Master Board) |
| MAX31888EVKIT# | EV Kit                            |
| USB2PMB2#      | Master Board                      |

# Denotes RoHS compliant.

Evaluates: MAX31888

## MAX31888 Evaluation System

## MAX31888 EV Kit Bill of Materials

| ITEM   |   QTY | REF DES           | MAXINV                | MFG PART #                                                                                           | MANUFACTURER                                    | VALUE             | DESCRIPTION                                                                                                                                                                       | STATUS             | EST_PRICE   | COMMENTS   |
|--------|-------|-------------------|-----------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|-------------|------------|
| 1      |     2 | C1, C2            | 20-000U1-03           | 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A | WURTH ELECTRONICS INC;TDK; KEMET;MURATA;TDK;AVX | 0.1UF             | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                    | ACTIVE             | $0.03       |            |
| 2      |     4 | DQ, SCL, SDA, VPU | 02-TPCOMP5007-00      | 5007                                                                                                 | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST | ACTIVE             | $1.56       |            |
| 3      |     2 | GND, GND1         | 02-TPCOMP5006-00      | 5006                                                                                                 | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST | ACTIVE             | $0.46       |            |
| 4      |     1 | J1                | 01-TSW10608SDRA12P-17 | TSW-106-08-S-D-RA                                                                                    | SAMTEC                                          | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS; THIS PART IS DEDICATED FOR PMOD PERIPHERAL BOARD                                                                        | EVKIT-NOT FOR TEST | $3.23       |            |
| 6      |     3 | R1-R2             | 80-004K7-19           | CRCW06034K70FK                                                                                       | VISHAY DALE                                     | 4.7K              | RES; SMT (0603); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                | TEMPLATE           | $0.02       |            |
| 7      |     4 | SPACER1-SPACER4   | 02-SOM35016H-00       | 9032                                                                                                 | KEYSTONE                                        |                   | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                    | EVKIT-NOT FOR TEST | $0.98       |            |
| 8      |     1 | U1                | 10-DS2484R-U          | DS2484R+                                                                                             | MAXIM                                           | DS2484R+          | IC; INFC; SINGLE-CHANNEL 1-WIRE MASTER WITH ADJUSTABLE TIMING AND SLEEP MODE; SOT23-6                                                                                             | ACTIVE             | $0.66       |            |
| 9      |     1 | U2                | 00-SAMPLE-01          | MAX31888                                                                                             | MAXIM                                           | MAX31888          | EVKIT PART - IC; PACKAGE OUTLINE DRAWING: 21-100397; PACKAGE LAND PATTERN: 90-100138; PACKAGE CODE: L622-2; UDFN6                                                                 | EVKIT-CUSTOM       | $0.00       |            |
| 11     |     1 |                   | USB2PMB2              |                                                                                                      |                                                 |                   | Adapter Board for the Munich                                                                                                                                                      |                    | $6.94       |            |
| TOTAL  |    20 |                   |                       |                                                                                                      |                                                 |                   |                                                                                                                                                                                   |                    |             |            |

| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| ITEM                                                                                        | QTY                                                                                         | REF DES                                                                                     | MAXINV                                                                                      | MFG PART #                                                                                  | MANUFACTURER                                                                                | VALUE                                                                                       | DESCRIPTION                                                                                 | STATUS                                                                                      | EST_PRICE                                                                                   | COMMENTS                                                                                    |
| TOTAL                                                                                       | 0                                                                                           |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             | $0.00                                                                                       |                                                                                             |
| TOTAL                                                                                       | 20                                                                                          |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             | $7.60                                                                                       |                                                                                             |

Evaluates: MAX31888

## MAX31888 Evaluation System

## MAX31888 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX31888

## MAX31888 Evaluation System

## MAX31888 EV Kit PCB Layout

MAX31888 EV Kit-Silk Top

<!-- image -->

Evaluates: MAX31888

MAX31888 EV Kit-Top

<!-- image -->

MAX31888 EV Kit-Bottom

<!-- image -->

│

## MAX31888 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                          | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------|-----------------|
|                 0 | 11/21           | Release for Market Intro                             | -               |
|                 1 | 4/24            | Added Note and updated Quick Start section.          | 1, 2            |
|                 2 | 2/26            | Updated Bill of Materials, Schematic, and PCB layout | 5-7             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX31888
<!-- lastmod 2022-08-03 -->
## MAX20313 Evaluation Kit

## General Description

The MAX20313 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20313 500mA  to  6A  adjustable  current-limit  switch  device. The  EV  kit  comes  with  the  MAX20313EWC+  installed. The  EV  kit  board  can  also  be  used  to  evaluate  the MAX20314, MAX20315, and MAX20316.

## Features

- 2.5V to 5.5V Operating Voltage Range
- Power, Enable, and Flag LED Reading
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV kit board containing a MAX20313

Ordering Information appears at end of data sheet.

Evaluates: MAX20313-MAX20316

## Quick Start

## Required Equipment

- MAX20313 EV kit
- 5V power supply
- Multimeter
- Load box

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect 4.3V on IN. Verify the OUT voltage is 4.3V and LED1 is on.
- 2) Install  shunt  on  JU2.  OUT  voltage  goes  down  and LED3 is on.
- 3) Remove  shunt  on  JU2.  OUT  voltage  is  4.3V  and LED3 is off.
- 4) Connect load box to OUT. Increase the load current and verify OUT voltage goes down when output current goes up to about 2.06A, and LED2 turns on.
- 5) Decrease load current and verify OUT voltage goes back to 4.3V and LED2 turns off.

<!-- image -->

## MAX20313 Evaluation Kit

## Detailed Description

The  MAX20313  EV  kit  is  a  fully  assembled  and  tested circuit board demonstrating the MAX20313 500mA to 6A adjustable current limit switch device in a 12-bump waferlevel package (WLP).

## LED Indicator

The EV kit features LED1 to indicate power on VIN. LED2 indicates FLAG is asserted. LED3 indicates the device is disabled.

## Table 1. JU1, JU3 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU1      | 1-2              | VIN is connected to V OUT       |
| JU1      | 2-3*             | VIN is connected to V IN        |
| JU3      | Installed        | VIN is connected to J1 VBUS     |
| JU3      | Not installed*   | VIN is not connected to J1 VBUS |

## Table 2. JU2 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU2      | Installed        | EN is low (MAX20313 is disabled, LED3 is on)  |
| JU2      | Not installed*   | EN is high (MAX20313 is enabled, LED3 is off) |

## Table 3. Switch Truth Table

| MAX20313 MAX20314   | MAX20315 MAX20316   | SWITCH STATUS   |
|---------------------|---------------------|-----------------|
| EN                  | EN                  |                 |
| 0                   | 1                   | Off             |
| 1                   | 0                   | On              |

## Table 4. JU4, JU5, JU6 Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                    |
|----------|------------------|----------------------------------------------------------------|
| JU4      | Installed*       | SETI is connected to 2kΩ (current limit 2.06A).                |
| JU4      | Not installed    | SETI is not connected to 2kΩ.                                  |
| JU5      | Installed        | SETI is connected to 1kΩ (current limit 4.07A).                |
| JU5      | Not installed*   | SETI is not connected to 1kΩ.                                  |
| JU6      | Installed        | SETI is connected to potentiometer (current limit adjustable). |
| JU6      | Not installed*   | SETI is not connected to potentiometer.                        |

Evaluates: MAX20313-MAX20316

## VIN Power

VIN can be powered from J1, IN, OUT, or test point TP7. Use jumper JU1 to connect VIN to IN or OUT. Use jumper JU3 to connect VIN to J1 VBUS. (Table 1)

## Enable Pin

Use jumper JU2 to enable/disable the device. (Table 2)

## Current Limit Threshold

Use jumper JU4, JU5, JU6 to choose R SETI , which sets the current limit threshold. (Table 4)

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20313EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20313 EV Bill of Materials

| ITEM     | REF_DES                   | DNI/DNP   | QTY      | MFG PART #                                                   | MANUFACTURER                                     | VALUE         | DESCRIPTION                                                                                                                    | COMMENTS   |
|----------|---------------------------|-----------|----------|--------------------------------------------------------------|--------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | C1, C2, C5                | -         | 3        | C1608X7R1V105K080AC                                          | TDK                                              | 1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                       |            |
| 2        | C6, C7                    | -         | 2        | GRM188R70J105KA01; CL10B105KQ8NNNC                           | MURATA/SAMSUNG ELECTRONICS                       | 1.0UF         | CAPACITOR; SMT (0603); CERAMIC; 1UF; 6.3V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R;                      |            |
| 3        | J1                        | -         | 1        | ZX62D-B-5P8                                                  | HIROSE ELECTRIC CO LTD.                          | ZX62D-B-5P8   | CONNECTOR; MALE; SMT; MICRO UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 5PINS                                          |            |
| 4        | JU1                       | -         | 1        | PEC03SAAN                                                    | SULLINS                                          | PEC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                      |            |
| 5        | JU2-JU6                   | -         | 5        | PEC02SAAN                                                    | SULLINS                                          | PEC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                      |            |
| 6        | LED1                      | -         | 1        | LTST-C150KGKT                                                | LITE-ON ELECTRONICS; INC.                        | LTST-C150KGKT | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV=2V; IF = 0.02A; -55°C TO +85°C                                                    |            |
| 7        | LED2                      | -         | 1        | LTST-C150KRKT                                                | LITE-ON ELECTRONICS; INC.                        | LTST-C150KRKT | DIODE; LED; STANDARD; RED; SMT (1206); PIV=2V; IF=0.02A; -30°C TO +85°C                                                        |            |
| 8        | LED3                      | -         | 1        | LTST-C150KSKT                                                | LITE-ON ELECTRONICS; INC.                        | LTST-C150KSKT | DIODE; LED; ULTRA BRIGHT CHIP LED; YELLOW; SMT (1206); PIV = 2.1V; IF = 0.02A                                                  |            |
| 9        | R1, R2, R12               | -         | 3        | CRCW0805680RFK                                               | VISHAY DALE                                      | 680           | RESISTOR, 0805, 680 Ω , 1%, 100PPM, 0.125W, THICK FILM                                                                         |            |
| 10       | R3, R5, R8                | -         | 3        | CRCW08051K00FK; ERJ-6ENF1001V; MCR10EZHF1001; RC0805FR-071KL | VISHAY DALE; PANASONIC; ROHM; YAGEO              | 1K            | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM                                                                             |            |
| 11       | R4                        | -         | 1        | CRCW08052K00FK                                               | VISHAY DALE                                      | 2K            | RESISTOR; 0805; 2K; 1%; 100PPM; 0.125W; THICK FILM                                                                             |            |
| 12       | R6                        | -         | 1        | CRCW0805665RFK                                               | VISHAY DALE                                      | 665           | RESISTOR; 0805; 665 Ω ; 1%; 100PPM; 0.125W; THICK FILM                                                                         |            |
| 13       | R7                        | -         | 1        | T93YA502K                                                    | VISHAY SFERNICE                                  | 5K            | RESISTOR; THROUGH HOLE-RADIAL LEAD; T93YA SERIES; 5K Ω ; 10%; 100PPM; 0.5W                                                     |            |
| 14       | R9                        | -         | 1        | CRCW0805475KFK                                               | VISHAY DALE                                      | 475K          | RESISTOR; 0805; 475K; 1%; 100PPM; 0.125W; THICK FILM                                                                           |            |
| 15       | R10, R11, R13             | -         | 3        | CRCW08050000ZS; ERJ-6GEY0R00V; RC2012J000; RMCF0805ZT0R00    | VISHAY DALE/PANASONIC/ STACKPOLE ELECTRONICS INC | 0             | RESISTOR; 0805; 0 Ω ; JUMPER; 0.125W; THICK FILM                                                                               |            |
| 16       | SU1-SU6                   | -         | 6        | STC02SYAN                                                    | SULLINS ELECTRONICS CORP.                        | STC02SYAN     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL  |            |
| 17       | TB1, TB2                  | -         | 2        | 398800302                                                    | MOLEX                                            | 398800302     | CONNECTOR; FEMALE; THROUGH HOLE; 5.08/.200 EUROSTYLE LOW; SINGLE ROW FIXED BLOCK; RIGHT ANGLE; 2PINS                           |            |
| 18       | TP1, TP2, TP4, TP5, TP7   | -         | 5        | 5010                                                         | KEYSTONE                                         | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE =         |            |
| 19       | TP3, TP6, TP8, TP12, TP13 | -         | 5        | 5011                                                         | KEYSTONE                                         | N/A           | 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                      |            |
| 20       | TP9-TP11                  | -         | 3        | 5013                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 21       | U1                        | -         | 1        | MAX20313EWC+                                                 | MAXIM                                            | MAX20313EWC+  | EVKIT PART-IC; 0.5A TO 6A ADJUSTABLE CURRENT-LIMIT SWITCH; PACKAGE OUTLINE: 21-100118; PACKAGE CODE: W121K1+1; 0.40MM PITCH    |            |
| 22       | U2                        | -         | 1        | NC7WZ07P6X                                                   | FAIRCHILD SEMICONDUCTOR                          | NC7WZ07P6X    | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                       |            |
| 23       | C3, C4                    | DNP       | 0        | 594D337X0016R2                                               | VISHAY SPRAGUE                                   | 330UF         | CAPACITOR; SMT (CASE_R); TANTALUM CHIP; 330UF; 16V; TOL = 20%; TG = -55°C TO +125°C; LOW ESR                                   |            |
| 24       | PCB                       | -         | 1        | MAX20313                                                     | MAXIM                                            | PCB           | PCB Board:MAX20313 EVALUATION KIT                                                                                              |            |
| TOTAL 52 | TOTAL 52                  | TOTAL 52  | TOTAL 52 | TOTAL 52                                                     | TOTAL 52                                         | TOTAL 52      | TOTAL 52                                                                                                                       | TOTAL 52   |

NOTE: DNI--&gt; DO NOT INSTALL ; DNP--&gt; DO NOT PROCURE

## MAX20313 EV Kit Schematics

<!-- image -->

## MAX20313 EV Kit PCB Layouts

<!-- image -->

MAX20313 EV Kit-Top Silkscreen

MAX20313 EV Kit-Top

<!-- image -->

MAX20313 EV Kit- Layer 2 GND

<!-- image -->

│

## MAX20313 EV Kit PCB Layouts (continued)

MAX20313 EV Kit-Layer 3 Power

<!-- image -->

MAX20313 EV Kit-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied. Ma[im Integrated reserYes the right to change the circuitr\ and sSeci¿cations Zithout notice at an\ time.

<!-- image -->

│

Evaluates: MAX20313-MAX20316
<!-- lastmod 2023-06-02 -->
## MAX38912 TDFN Evaluation Kit

## General Description

The MAX38912 TDFN evaluation kit (EV kit) evaluates the MAX38912 in a TDFN package. The MAX38912 is a lownoise, high-PSRR pMOS linear regulator. The MAX38912 TDFN EV kit operates over an input range of 1.7V to 5.5V, provides an output-voltage range from 0.8V to 5.0V, and can deliver up to 500mA of current. The EV kit comes with the MAX38912ATA+ installed.

## MAX38912 TDFN EV Kit Files

| FILE                                         | DESCRIPTION               |
|----------------------------------------------|---------------------------|
| MAX38912 TDFN EV BOM                         | EV Kit Bill of Material   |
| MAX38912 TDFN EV PCB Layout                  | EV Kit PCB Layout         |
| MAX38912 TDFN EV Schematic                   | EV Kit Schematic          |
| MAX38912 TDFN EV Minimal Component Schematic | Minimal Component Circuit |

## MAX38912 TDFN EV Kit Board Photo

<!-- image -->

Evaluates: MAX38912

## Benefits and Features

- Evaluates the MAX38912 in an 8-pin (2mm x 2mm) TDFN Package
- 1.7V to 5.5V Input Range
- 0.8V to 5.0V External Feedback Resistor Configuration
- Up to 500mA Output Current
- Jumper-Selectable Operating Modes
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

Ordering Information appears at end of data sh

<!-- image -->

Evaluates: MAX38912

## Quick Start

## Required Equipment

- MAX38912 TDFN EV kit
- 5.5V, 1A DC power supply
- Electronic load capable of 500mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

Caution: Do not turn on the power supply until all connections are completed.

1.  Verify that the jumper JU1 has a shunt across pins 1 and 2 (EV kit enabled) as shown in Table 1 .
2.  Verify that the jumper JU2 has a shunt across pins 1 and 2 (Normal mode) as shown in Table 2 .
3.  Connect the 1.7V power supply between the IN and GND banana jacks.
4.  Connect the 500mA electronic load between the OUT and GND banana jacks.
5.  Connect the DVM between the OUT and GND banana jacks.
6.  Turn on the power supply.
7.  Enable the electronic load.
8.  Verify that the output voltage is approximately 1.0V.

## Detailed Description of Hardware

The MAX38912 TDFN evaluation kit evaluates the MAX38912 in a TDFN package. The MAX38912 is a low-noise linear regulator that delivers 500mA of output current with only 11μV RMS  of output noise from 10Hz to 100kHz. The MAX38912 has a high PSRR of 70dB at 10Hz. This regulator requires only 62mV of input-to-output headroom at full load.

The EV kit operates over an input range of 1.7V to 5.5V. The EV kit comes with the MAX38912ATA+ installed. The EV Kit's output voltage is set to 1.0V by external feedback resistors R1 and R2. The EV Kit can deliver up to 500mA of current in Normal mode. In Low-Power mode (LPM), the output-current limit is configured up to 20mA, and has a no-load quiescent current of 19.2μA.

## EN (Enable)

The EV kit provides a jumper JU1 to enable or disable the MAX38912. See Table 1 for jumper JU1 settings.

## Table 1. EN (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION        |
|----------------------|--------------------|
| 1-2*                 | Enabled. EN = IN   |
| 2-3                  | Disabled. EN = GND |

## MODE (Mode Selection)

The EV kit provides a jumper JU2 to select between Normal and Lower-Power modes for the MAX38912. See Table 2 for JU2 jumper settings.

## Table 2. MODE (JU2)

| JU2 SHUNT POSITION   | DESCRIPTION                                    |
|----------------------|------------------------------------------------|
| 1-2*                 | Normal. MODE = IN (Output Current up to 500mA) |
| 2-3                  | LPM. MODE = GND (Output Current up to 20mA)    |

## POK (Power OK)

The EV Kit provides a test point to monitor the POK status of the MAX38912. POK is pulled up to OUT via resistor R3 to create a signal that goes high after the regulator output has reached its regulation voltage. POK can also be pulled up to IN, the input supply via resistor R4 (after removing R3 and installing a resistor onto R4).

## Evaluating Other Output Voltages

The EV kit can evaluate the MAX38912 in other output voltages, between 0.8V and 5.0V, after replacing external feedback resistors R1 and R2. Refer to the MAX38912 IC data sheet, Output Voltage Configuration section, for more information on calculating the output voltage feedback resistor values.

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX38912EVK#TDFN | EV Kit |

#Denotes RoHS-compliant.

Evaluates: MAX38912

## MAX38912 TDFN EV Kit Bill of Materials

| ITEM     | REF_DES      | QTY      | MFG PART #                                                                            | MANUFACTURER                                                 | DESCRIPTION                                                                                                                                         |
|----------|--------------|----------|---------------------------------------------------------------------------------------|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| 1        | C1           | 1        | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET; MURATA; TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN          | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                                                     |
| 2        | C2, C3       | 2        | GMC10X7R475K6R3NT; CL10B475KQ8NQN; JMK107BB7475KA; CL10B475KQ8NQNC; 06036C475KAT2A    | CAL-CHIP ELECTRONIC INC.; SAMSUNG; TAIYO YUDEN; SAMSUNG; AVX | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X7R; CERAMIC;                                                                                                    |
| 3        | GND, IN, OUT | 3        | 108-0740-001                                                                          | EMERSON NETWORK POWER                                        | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                            |
| 4        | JU1, JU2     | 2        | PEC03SAAN                                                                             | SULLINS                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                           |
| 5        | POK          | 1        | 5002                                                                                  | KEYSTONE                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                               |
| 6        | R1           | 1        | CRCW0603200KFK                                                                        | VISHAY DALE                                                  | RES; SMT (0603); 200K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                  |
| 7        | R2           | 1        | CPF0603F301KC                                                                         | TE CONNECTIVITY                                              | RES; SMT (0603); 301K; 1%; +/-50PPM/DEGC; 0.0630W                                                                                                   |
| 8        | R3           | 1        | ERA-3AEB104; AT0603BRD07100KL                                                         | PANASONIC; YAGEO                                             | RES; SMT (0603); 100K; 0.10%; +/-25PPM/DEGC; 0.1000W                                                                                                |
| 9        | SU1, SU2     | 2        | SNT-100-BK-G                                                                          | SAMTEC                                                       | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT=PHOSPHOR BRONZE                           |
| 10       | TP_GND       | 1        | 5001                                                                                  | KEYSTONE                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                  |
| 11       | TP_OUT       | 1        | 5000                                                                                  | KEYSTONE                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                    |
| 12       | U1           | 1        | MAX38912ATA+                                                                          | MAXIM                                                        | EVKIT PART - IC; MAX38912ATA+; 500MA LDO WITH LOW POWER MODE; PACKAGE OUTLINE DRAWING: 21-0168; LAND PATTERN NUMBER: 90-0065; PACKAGE CODE: T822+3C |
| 13       | PCB          | 1        | MAX38912TDFN                                                                          | MAXIM                                                        | PCB:MAX38912TDFN                                                                                                                                    |
| 14       | R4           | 0        | N/A                                                                                   | N/A                                                          | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                       |
| 15       | R5           | 0        | N/A                                                                                   | N/A                                                          | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                       |
| 16       | C4, C5       | 0        | N/A                                                                                   | N/A                                                          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                            |
| TOTAL 18 | TOTAL 18     | TOTAL 18 | TOTAL 18                                                                              | TOTAL 18                                                     | TOTAL 18                                                                                                                                            |

Evaluates: MAX38912

## MAX38912 TDFN EV Kit Schematic Diagram

<!-- image -->

## MAX38912 TDFN Minimal Component Schematic Diagram

<!-- image -->

Evaluates: MAX38912

## MAX38912 TDFN EV Kit PCB Layout Diagrams

<!-- image -->

MAX38912 TDFN EV Kit-Top Silkscreen

MAX38912 TDFN EV Kit PCB Layout-Top View

<!-- image -->

MAX38912 TDFN EV Kit PCB Layout-Bottom View

<!-- image -->

Evaluates: MAX38912

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 08/21           | Initial release | -               |

<!-- image -->
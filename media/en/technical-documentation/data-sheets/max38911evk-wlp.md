<!-- lastmod 2022-08-03 -->
## MAX38911 WLP Evaluation Kit

## General Description

The MAX38911 WLP evaluation kit (EV kit) evaluates the MAX38911 in a WLP package. The MAX38911 is a lownoise, high-PSRR pMOS linear regulator. The MAX38911 WLP EV kit operates over an input range of 1.7V to 5.5V, provides  a  factory-preset  output-voltage  range  of  0.8V to 5.0V in 50mV steps, and can deliver up to 500mA of current. The EV kit comes with the MAX38911ANT+ (1.8V output) installed.

## Benefits and Features

- Evaluates the MAX38911 in a 6-ball (1.42mm x 0.83mm) WLP
- 1.7V to 5.5V Input Range
- 0.8V to 5.0V Factory-Preset Output Voltage (with IC Replacement)
- Up to 500mA Output Current
- Jumper-Selectable Operating Modes
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38911 WLP EV Kit Files

| FILE                                        | DECRIPTION                |
|---------------------------------------------|---------------------------|
| MAX38911 WLP EV BOM                         | EV Kit Bill of Material   |
| MAX38911 WLP EV PCB Layout                  | EV Kit Layout             |
| MAX38911 WLP EV Schematic                   | EV Kit Schematic          |
| MAX38911 WLP EV Minimal Component Schematic | Minimal Component Circuit |

Ordering Information appears at end of data sheet.

Evaluates: MAX38911

## Quick Start

## Required Equipment

- MAX38911 WLP EV kit
- 5.5V, 1A DC power supply
- Electronic load capable of 500mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify that jumper JU1 has a shunt across pins 1 and 2 (EV kit enabled) as shown in Table 1.
- 2) Verify that jumper JU2 has a shunt across pins 1 and 2 (Normal mode) as shown in Table 2.
- 3) Connect the 2.1V power supply between the IN and GND terminal posts.
- 4) Connect the 500mA electronic load between the OUT and GND terminal posts.
- 5) Connect the DVM between the OUT and GND terminal posts.
- 6) Turn on the power supply.
- 7) Enable the electronic load.
- 8) Verify that the voltage at the OUT terminal post is approximately 1.8V.

<!-- image -->

## Detailed Description of Hardware

The  MAX38911  WLP  evaluation  kit  (EV  kit)  evaluates the MAX38911 in a WLP package. The MAX38911 is a low-noise linear regulator that delivers 500mA of output current  with  only  11µV RMS   of  output  noise  from  10Hz to  100kHz.  The  MAX38911  has  a  high  PSRR  of  70dB at  10Hz.  This  regulator  requires  only  62mV  of  input-tooutput headroom at full load.

The  MAX38911  WLP  EV  kit  operates  over  an  input range  of  1.7V  to  5.5V.  The  EV  kit  comes  with  the MAX38911ANT+ installed and a factory-preset output of 1.8V, and can deliver up to 500mA of current in Normal mode. In Low-Power mode (LPM), the output-current limit is  configured  up  to  20mA,  and has a no-load quiescent current of 19.2µA.

## Table 1. EN (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION        |
|----------------------|--------------------|
| 1-2*                 | Enabled. EN = IN   |
| 2-3                  | Disabled. EN = GND |

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38911 when contact- ing these component suppliers.

## EN (Enable)

The  MAX38911  WLP  EV  kit  provides  a  jumper  JU1  to enable  or  disable  the  MAX38911.  Refer  to  Table  1  for jumper JU1 settings.

## MODE (Mode Selection)

The  MAX38911  WLP  EV  kit  provides  a  jumper  JU2  to select between Normal and Lower-Power modes for the MAX38911. Refer to Table 2 for JU2 jumper settings.

## Evaluating Other Output Voltages

The MAX38911 WLP EV kit can evaluate the MAX38911 in  other  output  voltages  after  IC  (U1)  replacement. The  MAX38911  can  be  factory-trimmed  to  any  voltage between  0.8V  and  5.0V,  in  50mV  steps.  Contact  the factory to order the MAX38911 with the desired factorypreset output voltages.

## Table 2. MODE (JU2)

| JU101 SHUNT POSITION   | DESCRIPTION                                     |
|------------------------|-------------------------------------------------|
| 1-2*                   | Normal. MODE = IN. (Output Current up to 500mA) |
| 2-3                    | LPM. MODE = GND. (Output Current up to 20mA)    |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX38911EVK#WLP | EV Kit |

#Denotes RoHS

Evaluates: MAX38911

│

## MAX38911 WLP EV Kit Bill of Materials

| ITEM   | REF_DES      |       |   QTY | MFGPART #                                                                             | MANUFACTURER                                                | VALUE          | DESCRIPTION                                                                                                                   |
|--------|--------------|-------|-------|---------------------------------------------------------------------------------------|-------------------------------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1           |       |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET; MURATA; TDK; SAMSUNGELECTRONIC; TAIYO YUDEN          | 0.01µF         | CAPACITOR;SMT (0402); CERAMIC CHIP; 0.01µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                    |
| 2      | C2, C3       |       |     2 | GMC10X7R475K6R3NT; CL10B475KQ8NQN; JMK107BB7475KA; CL10B475KQ8NQNC; 06036C475KAT2A    | CAL-CHIP ELECTRONIC INC.; SAMSUNG; TAIYO YUDEN; SAMSUNG;AVX | 4.7µF          | CAPACITOR;SMT (0603); CERAMIC CHIP; 4.7µF; 6.3V; TOL = 10%; MODEL=; TG = -55°C TO +125°C; TC=X7R;                             |
| 3      | GND, IN, OUT |       |     3 | 108-0740-001                                                                          | EMERSON NETWORKPOWER                                        | 108-0740-001   | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                      |
| 4      | JU1, JU2     |       |     2 | PEC03SAAN                                                                             | SULLINS                                                     | PEC03SAAN      | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                      |
| 5      | SU1, SU2     |       |     2 | SNT-100-BK-G                                                                          | SAMTEC                                                      | SNT-100-BK-G   | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH = 6.10MM; BLACK; INSULATION=GLASS FILLED POLYESTER; CONTACT = PHOSPHOR BRONZE |
| 6      | U1           |       |     1 | MAX38911ANT+                                                                          | MAXIM                                                       | MAX38911ANT+   | EVKIT PART - IC; MAX38911ANT+;500MALOW NOISE PMOS LDO WITHLOW POWERMODE;TEMPORARY FOOTPRINT                                   |
| 7      | PCB          |       |     1 | MAX38911WLP                                                                           | MAXIM                                                       | PCB            | PCB:MAX38911WLP                                                                                                               |
| 8      | BUMP1-BUMP4  | DNI   |     4 | SJ-5003(BLACK)                                                                        | 3M ELECTRONIC SOLUTIONS DIVISION                            | SJ-5003(BLACK) | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                                 |
| 9      | R5           | DNP   |     0 | N/A                                                                                   | N/A                                                         | SHORT          | PACKAGE OUTLINE 0603 RESISTOR                                                                                                 |
| 10     | C4, C5       | DNP   |     0 | N/A                                                                                   | N/A                                                         | OPEN           | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                      |
| TOTAL  | TOTAL        | TOTAL |    16 |                                                                                       |                                                             |                |                                                                                                                               |

## MAX38911 WLP EV Kit Schematic Diagram

<!-- image -->

## MAX38911 WLP EV Kit Minimal Component Schematic Diagram

<!-- image -->

│

Evaluates: MAX38911

## MAX38911 WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX38911 WLP EV Kit-Top Silkscreen

MAX38911 WLP EV Kit-Top View

<!-- image -->

MAX38911 WLP EV Kit-Bottom View

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX38911
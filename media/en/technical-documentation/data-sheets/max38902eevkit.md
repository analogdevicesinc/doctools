<!-- lastmod 2022-08-03 -->
## MAX38902E Evaluation Kit

## General Description

The  MAX38902E  evaluation  kit  (EV  kit)  evaluates  the MAX38902E IC. The MAX38902E is a low noise linear regulator  in  a  TDFN  package.  The  MAX38902E  EV  kit operates over an input range of 1.7V to 5.5V and provides any output voltage from 0.8V to 5.0V and delivers up to 500mA of current.

The EV kit comes with the MAX38902EATA+ installed.

## Features

- Evaluates the MAX38902E IC in an 8-pin (2mm x 2mm) TDFN
- 1.7V to 5.5V Input Range
- 0.8V to 5.0V Resistor Configurable Output Voltage
- Up to 500mA Output Current
- Proven 2-Layer 1-oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38902E EV Kit Files

| FILE                    | DESCRIPTION             |
|-------------------------|-------------------------|
| MAX38902E EV BOM        | EV Kit Bill of Material |
| MAX38902E EV PCB Layout | EV Kit Layout           |
| MAX38902E EV Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX38902E

## Quick Start

## Required Equipment

- MAX38902E EV kit
- 5.5V, 1A DC power supply
- Electronic load capable of 500mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 1) Verify  that  jumpers  JU1  is  in  its  default  position,  as shown in Table 1.
- 2) Connect the 5.5V power supply between the IN and nearest GND terminal posts.
- 3) Connect the 500mA electronic load between the OUT and nearest GND terminal posts.
- 4) Connect  the  DVM  between  the  OUT  and  nearest GND terminal posts.
- 5) Turn on the power supply.
- 6) Verify  that  the  voltage  at  the  OUT  terminal  post  is 2.5V  within  the  device  and  the  resistor  divider's accuracy specifications.
- 7) Decrease the power supply to 3.3V (To minimize power dissipation at full load).
- 8) Enable the electronic load.
- 9) Verify that the voltage at the OUT terminal post is 2.5V within the device and the resistor divider's accuracy specifications.

<!-- image -->

## Detailed Description of Hardware

The  MAX38902E EV kit  evaluates  the  MAX38902E  IC. The MAX38902E is a low noise linear regulator that delivers 500mA of output current with only 14µV RMS  of output noise  from  10Hz  to  100kHz.  The  MAX38902E  requires only 100mV of input-to-output headroom at full load.

The MAX38902E EV kit operates over an input range of 1.7V to 5.5V and delivers up to 500mA of current.

The MAX38902E EV kit comes with the MAX38902EATA+ installed and the output is resistor configured to 2.5V and can deliver 500mA of current. The output voltage on the EV Kit can be reconfigured to other voltages from 0.8V to 5.0V by replacing feedback resistors R1 and R2. Refer to  the MAX38902E IC data  sheet for  feedback  resistor calculation.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX38902EEVKIT# | EV Kit |

#Denotes RoHS compliant.

## EN

The EV kit provides a jumper JU1 to enable or disable the  MAX38902E. Refer to Table 1 for jumper setting  of jumper JU1.

## Table 1. EN (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION        |
|----------------------|--------------------|
| 1-2*                 | Enabled. EN = IN   |
| 2-3                  | Disabled. EN = GND |

*Default Position

## Component Suppliers

| SUPPLIER                                | WEBSITE            |
|-----------------------------------------|--------------------|
| Murata/TOKO                             | www.murata.com     |
| TDK                                     | www.tdk.com        |
| Samsung Electro-Mechanics America. Inc. | www.samsungsem.com |

Note: Indicate that you are using the MAX38902E when contacting these component suppliers.

│

Evaluates: MAX38902E

## MAX38902E EV Kit Bill of Materials

|   ITEM | REF_DES      | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                         | VALUE          | DESCRIPTION                                                                                                                                                                 |
|--------|--------------|-----------|-------|------------------------------------------------------------------------------------|--------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1           | -         |     1 | C1608C0G1H103J080AA; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01                       | TDK;TDK;MURATA                       | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL = 5%; TG = -55°C to +125°C; TC = C0G                                                                                  |
|      2 | C2, C3       | -         |     2 | GMC10X7R475K6R3NT; CL10B475KQ8NQN                                                  | CAL-CHIP ELECTRONIC INC.; SAMSUNG EL | 4.7UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 6.3V; TOL = 10%; MODEL=; TG = -55°C TO +125°C; TC = X7R;                                                                        |
|      3 | GND, IN, OUT | -         |     3 | 108-0740-001                                                                       | EMERSON NETWORK POWER                | 108-0740-001   | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                    |
|      4 | JU1          | -         |     1 | PEC03SAAN                                                                          | SULLINS                              | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                   |
|      5 | POK          | -         |     1 | 5002                                                                               | KEYSTONE                             | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                                   |
|      6 | R1           | -         |     1 | ERJ-3EKF9533                                                                       | PANASONIC                            | 953K           | RES; SMT (0603); 953K; 1%; ± 100PPM/DEGC; 0.1W                                                                                                                              |
|      7 | R2           | -         |     1 | CPF0603F301KC                                                                      | TE CONNECTIVITY                      | 301K           | RESISTOR; 0603; 301K Ω ; 1%; 50PPM; 0.063W; THIN FILM                                                                                                                       |
|      8 | R3           | -         |     1 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO;YAGEO; PANASONIC   | 100K           | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                         |
|      9 | SU1          | -         |     1 | STC02SYAN                                                                          | SULLINS ELECTRONICS CORP.            | STC02SYAN      | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                 |
|     10 | TP_GND       | -         |     1 | 5001                                                                               | KEYSTONE                             | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                    |
|     11 | TP_OUT       | -         |     1 | 5000                                                                               | KEYSTONE                             | N/A            | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                        |
|     12 | U1           | -         |     1 | MAX38902EATA+                                                                      | MAXIM                                | MAX38902EATA+  | EVKIT PART - IC; MAX38902EATA+; 14MICRO VRMS LOW NOISE 500 MILLIAMPERE LDO LINEAR REGULATOR; PACKAGE OUTLINE DRAWING: 21-0168; PACKAGE CODE: T822+3C; LAND PATTERN: 90-0065 |
|     13 | PCB          | -         |     1 | MAX38902E                                                                          | MAXIM                                | PCB            | PCB:MAX38902E                                                                                                                                                               |
|     14 | BUMP1-BUMP4  | DNI       |     4 | SJ-5003(BLACK)                                                                     | 3M ELECTRONIC SOLUTIONS DIVISION     | SJ-5003(BLACK) | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                                                                               |
|     15 | C1           | DNP       |     0 | C1608C0G1E103J                                                                     | TDK                                  | 0.01UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 25V; TOL = 5%; MODEL=; TG = -55°C TO +125°C; TC = C0G                                                                          |
|     16 | C2           | DNP       |     0 | C1608X5R1C475K080AC                                                                | TDK/TAIYO YUDEN                      | 4.7UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 16V; TOL = 10%; MODEL=; TG = -55°C TO +85°C; TC = X5R                                                                           |
|     17 | C2           | DNP       |     0 | GRM188C71A475KE11; C1608X7S1A475K080AC                                             | MURATA; TDK                          | 4.7UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                                                                  |
|     18 | C4           | DNP       |     0 | N/A                                                                                | N/A                                  | OPEN           | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                                                    |
|     19 | R4           | DNP       |     0 | N/A                                                                                | N/A                                  | OPEN           | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                                               |
|     20 | R5           | DNP       |     0 | N/A                                                                                | N/A                                  | SHORT          | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                                               |

## MAX38902E EV Kit Schematic

<!-- image -->

│

## MAX38902E EV Kit PCB Layout Diagrams

MAX38902E EV Kit-Top Silkscreen

<!-- image -->

MAX38902E EV Kit-Top View

<!-- image -->

Evaluates: MAX38902E

MAX38902E EV Kit-Bottom View

<!-- image -->

MAX38902E EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPpOieG. 0a[iP ,nteJrateG reserYes tKe riJKt to cKanJe tKe circuitry anG specifications ZitKout notice at any tiPe.

│

Evaluates: MAX38902E
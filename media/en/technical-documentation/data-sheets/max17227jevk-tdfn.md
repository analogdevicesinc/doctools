<!-- lastmod 2023-06-05 -->
## MAX17227J TDFN Evaluation Kit

## General Description

The MAX17227J TDFN evaluation kit (EV kit) evaluates the MAX17227J IC in a TDFN package. The MAX17227J is  a  nanoPower  Boost  converter  with  a  500mA  peak inductor  current  limit  and  offers  automatic  pass-through operation  when  the  input  voltage  is  higher  than  the  set output voltage. The EV kit operates over an input range of 400mV to 5.5V depending on load, with a 0.88V typical startup  with  3kΩ  load.  The  EV  kit  provides  resistor configurable output voltages from 2.3V to 5.4V. Refer to the MAX17227J IC data sheet for output voltage settings. The EV kit comes with the MAX17227JATA+ installed.

## Features and Benefits

- Evaluates the MAX17227J in an 8-pin TDFN Package
- 400mV to 5.5V Input Range
- 800mV Minimum Startup Voltage
- 2.3V to 5.4V Configurable Output Voltage
- Up to 300mA Output Current at 5.0V (VIN &gt; 3.6V)
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX17227J TDFN EV Kit Files

| FILE                         | DESCRIPTION             |
|------------------------------|-------------------------|
| MAX17227J TDFN EV BOM        | EV Kit Bill of Material |
| MAX17227J TDFN EV PCB Layout | EV Kit PCB Layout       |
| MAX17227J TDFN EV Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

## EV Kit Photo

319-100874; Rev 0; 1/22

<!-- image -->

Evaluates: MAX17227J

## Quick Start

## Required Equipment

- MAX17227J TDFN EV kit
- 400mV to 5.5V, 3A DC power supply
- Electronic load capable of 300mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

Caution:  Do  not turn on  power  supply  until all connections are completed.

1.  Verify that a shunt is installed on pins 1 and 2 of jumper JU1 (EV kit enable).
2.  Verify that a shunt is installed on pins 1 and 5 of jumper JU2 (OUT = 5V).
3.  Connect  the  power  supply  between  the  IN  and  the nearest GND terminal posts.
4.  Connect the electronic load between the OUT and the nearest GND terminal posts.
5.  Connect the DVM between the OUT and the nearest GND terminal posts.
6.  Set the input power supply to 4V and turn on the power supply.
7.  Set  the  electronic  load  to  300mA  and  turn  on  the electronic load.
8. Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 5V.

<!-- image -->

## MAX17227J TDFN Evaluation Kit

## Detailed Description of Hardware

The MAX17227J TDFN EV kit evaluates the MAX17227J in a TDFN package. The MAX17227J is a nanoPower boost converter with a 500mA peak inductor current limit and has an Automatic Pass-Through mode when the input voltage is higher than the set output voltage. The EV kit operates over an input range of 400mV to 5.5V depending on load, with 0.88V typical startup with a 3kΩ load. The EV kit provides resistor-configurable output voltages from 2.3V to 5.4V. The EV kit comes with the MAX17227JATA+ installed.

## EN

The MAX17227J TDFN EV kit provides a jumper JU1 to enable or disable the MAX17227J. See Table 1 for jumper JU1 settings. Note that for the MAX17227J IC version, the input will automatically pass through to the output when the input voltage is higher than the set output voltage.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION                                                                                                                                          |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2*             | EN = IN (EV kit enabled)                                                                                                                             |
| 2-3              | EN = GND (EV kit disabled)                                                                                                                           |
| Not Installed    | EN is driven by an external TTL voltage source connected between the EN and GND test point • EN = High (EV kit enabled) • EN = Low (EV kit disabled) |

## Output Voltage Selection

The MAX17227J TDFN EV kit provides a jumper JU2 to select the output voltage of the MAX17227J. See Table 2 for jumper JU2 settings.

## Table 2. Output Voltage Selection (JU2)

| SHUNT POSITION   | DESCRIPTION                                                                                                                                                        |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2              | OUT = 2.5V                                                                                                                                                         |
| 1-3              | OUT = 3.0V                                                                                                                                                         |
| 1-4              | OUT = 4.0V                                                                                                                                                         |
| 1-5*             | OUT = 5.0V                                                                                                                                                         |
| Not Installed    | Output voltage is configured by resistor R1. Refer to the MAX17227J IC Data Sheet RSEL Selection Table to select the resistor value for the desired output voltage |

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17227JEVK#TDFN | EV Kit |

## Component Supplier

| SUPPLIER          | WEBSITE           |
|-------------------|-------------------|
| Murata/TOKO       | www.murata.com    |
| Wurth Electronics | www.we-online.com |

Note: indicate that you are using the MAX17227J when contacting these component suppliers.

Evaluates: MAX17227J

## MAX17227J TDFN EV Kit Bill of Materials

|   ITEM | REF_DES             |   QTY | MFG PART #                                                    | MANUFACTURER                            | DESCRIPTION                                                                                                        |
|--------|---------------------|-------|---------------------------------------------------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C2*             |     2 | GRM188Z71A106KA73 GRM21BR71A106KA73L                          | MURATA MURATA                           | CAP; SMT (0603); 10UF; 10%; 10V; X7R; CERAMIC; CAP; SMT (0805); 10UF; 10%; 10V; X7R; CERAMIC;                      |
|      2 | EN, RSEL            |     2 | 5002                                                          | KEYSTONE                                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |
|      3 | GND, GND2, IN, OUT1 |     4 | 108-0740-001                                                  | EMERSON NETWORK POWER                   | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                           |
|      4 | GND3, GND4          |     2 | 5001                                                          | KEYSTONE                                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      5 | JU1                 |     1 | PEC03SAAN                                                     | SULLINS                                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                          |
|      6 | JU2                 |     1 | PBC05SAAN                                                     | SULLINS ELECTRONICS CORP.               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                   |
|      7 | L1                  |     1 | 74479276222                                                   | WURTH ELECTRONICS INC.                  | INDUCTOR; SMT (0806); MOLDED CHIP; 2.2UH; 30%; 1.40A                                                               |
|      8 | LX, OUT             |     2 | 131-4353-00                                                   | TEKTRONICS                              | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS;                                   |
|      9 | R2                  |     1 | CRCW0603768KFK                                                | VISHAY DALE                             | RES; SMT (0603); 768K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                |
|     10 | R3                  |     1 | CRCW0603324KFK                                                | VISHAY DALE                             | RES; SMT (0603); 324K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                |
|     11 | R4                  |     1 | CRCW060356K2FK; ERJ-3EKF5622                                  | VISHAY; PANASONIC                       | RES; SMT (0603); 56.2K; 1%; +/- 100PPM/DEGC; 0.1000W                                                               |
|     12 | R5                  |     1 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0 | VISHAY DALE; PANASONIC; YAGEO           | RES; SMT (0603); 10K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                 |
|     13 | R6                  |     1 | ERJ-2GE0R00                                                   | PANASONIC                               | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                        |
|     14 | SU1, SU2            |     2 | S1100-B;SX1100-B; STC02SYAN                                   | KYCON; KYCON; SULLINS ELECTRONICS CORP. | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED            |
|     15 | U1                  |     1 | MAX17227JATA+                                                 | MAXIM                                   | IC; CONV; NANOPOWER BOOST CONVERTER WITH SHORT-CIRCUIT PROTECTION AND AUTOMATIC PASS-THROUGH MODE; TDFN8-EP        |
|     16 | PCB                 |     1 | MAX17227JTDFN                                                 | MAXIM                                   | PCB:MAX17227JTDFN                                                                                                  |
|     17 | C3                  |     0 | N/A                                                           | N/A                                     | CAPACITOR; SMT, 0402; OPEN; FORMFACTOR                                                                             |

www.analog.com

Evaluates: MAX17227J

Evaluates: MAX17227J

| 18    | R1   |   0 | N/A   | N/A   | RESISTOR; SMT, 0402; OPEN; FORMFACTOR   |
|-------|------|-----|-------|-------|-----------------------------------------|
| Total |      |  24 |       |       |                                         |

## MAX17227J TDFN EV Kit Schematic

<!-- image -->

## MAX17227J TDFN EV Kit PCB Layout

MAX17227J TDFN EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX17227J TDFN EV Kit PCB Layout-Bottom

<!-- image -->

Evaluates: MAX17227J

<!-- image -->

MAX17227J TDFN EV Kit PCB Layout-Top

<!-- image -->

## MAX17227J TDFN Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/22            | Initial Release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX17227J
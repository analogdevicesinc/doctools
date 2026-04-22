<!-- lastmod 2023-06-02 -->
## MAX17291 WLP Evaluation Kit

## General Description

The MAX17291 WLP evaluation kit (EV kit) evaluates the MAX17291 IC packaged in a WLP. The MAX17291 is a low  quiescent  current  boost  (step-up)  DC-DC  converter with  a  1A  peak  inductor  current  limit,  TrueShutdown™, and  short-circuit  protection.  The  MAX17291  EV  kit operates  over  an  input  range  of  1.8V  to  5.5V  and  provides  resistor-configurable  output  voltages  from  5.5V  to 20V. The EV kit comes with the MAX17291ANT+ (WLP) installed.

## Benefits and Features

- Evaluates the MAX17291 IC in a 6-Bump WLP (3 x 2 Bump, 0.4mm Pitch)
- 1.8V to 5.5V Input Range
- 5.5V to 20V Configurable Output Voltage
- Up to 1A Input Peak Current
- Proven 2-Layer, 1.5oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX17291 WLP EV Kit Files

| FILE                       | DESCRIPTION              |
|----------------------------|--------------------------|
| MAX17291 WLP EV BOM        | EV Kit Bill of Materials |
| MAX17291 WLP EV PCB Layout | EV Kit Layout            |
| MAX17291 WLP EV Schematic  | EV Kit Schematic         |

Ordering Information appears at end of data sheet.

TrueShutdown is a trademark of Maxim Integrated Products, Inc.

319-100610; Rev 0; 10/20

Evaluates: MAX17291 in WLP

## Quick Start

## Required Equipment

- MAX17291 WLP EV Kit
- 1.8V to 5.5V, 5A DC Power Supply
- Electronic Load Capable of 310mA
- Digital Voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that a shunt is installed on pins 1 and 2 of jumpers JU1 (EV kit enabled).
- 2) Connect the power supply between the IN and nearest GND terminal posts.
- 3) Connect the electronic load between the OUT and nearest GND terminal posts.
- 4) Connect the DVM between the OUT and nearest GND terminal posts.
- 5) Set the power supply to 5.5V and turn it on.
- 6) Set the electronic load to 310mA at constant current mode, then enable the electronic load.
- 7) Verify that the voltage at the OUT terminal post is approximately 12V.

<!-- image -->

## MAX17291 WLP Evaluation Kit

## Detailed Description of Hardware

The MAX17291 WLP EV kit evaluates the MAX17291 IC in  a  WLP  package. The  MAX17291 is  a  high  efficiency, low  quiescent  current,  step-up  DC-DC  converter  with TrueShutdown and short-circuit protection. True Shutdown disconnects the output from the input with no forward or reverse  current.  The  MAX17291  WLP  EV  kit  operates over an input range of 1.8V to 5.5V. The EV kit provides resistor-configurable output voltages from 5.5V to 20V.

The  EV  kit  comes  with  the  MAX17291ANT+  (WLP) installed  and  is  configured  for  a  12V  output.  The  12V output can deliver 310mA of current at 5.5V input.

## Component Suppliers

| SUPPLIER    | WEBSITE             |
|-------------|---------------------|
| Murata/TOKO | www.murata.com      |
| Nexperia    | www.nexperia.com    |
| Nichicon    | www.nichicon-us.com |
| Taiyo Yuden | www.ty-top.com      |

Note: Indicate that you are using the MAX17291 when contact- ing these component suppliers.

## EN

The  MAX17291  WLP  EV  kit  provides  a  jumper  JU1  to enable  or  disable  the  MAX17291.  See  Table  1  for  JU1 jumper settings.

## Table 1. EN (JU1) Jumper Settings

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2*             | Enabled. EN = IN*  |
| 2-3              | Disabled. EN = GND |

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17291EVK#WLP | EV Kit |

#Denotes RoHS compliant.

## Evaluates: MAX17291 in WLP

│

## MAX17291 WLP EV Kit Bill of Materials

| ITEM     | REF_DES              | DNI/DNP   | QTY      | MFG PART #                                                                                 | MANUFACTURER                            | VALUE        | DESCRIPTION                                                                                                                   |
|----------|----------------------|-----------|----------|--------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1        | C1, C8               | -         | 2        | CL21B106KPQNNN; LMK212AB7106KG; C0805X106K8RACAUTO; GRM21BR71A106KA73; C2012X7R1A106K125AC | SAMSUNG; TAIYO YUDEN; KEMET; MURATA;TDK | 10µF         | CAP; SMT (0805); 10µF; 10%; 10V; X7R; CERAMIC CHIP                                                                            |
| 2        | C2, C5               | -         | 2        | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL                    | MURATA;MURATA; MURATA; TAIYO YUDEN      | 4.7µF        | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7µF; 50V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R                          |
| 3        | C6                   | -         | 1        | UWJ0J151MCL                                                                                | NICHICON                                | 150µF        | CAP; SMT; 150µF; 20%; 6.3V; ALUMINUM-ELECTROLYTIC                                                                             |
| 4        | EN, TP3              | -         | 2        | 5012                                                                                       | KEYSTONE                                | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 5        | GND1, TP2, TP4       | -         | 3        | 5011                                                                                       | KEYSTONE                                | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 6        | IN, OUT, PGND, PGND2 | -         | 4        | 108-0740-001                                                                               | EMERSON NETWORK POWER                   | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                      |
| 7        | JU1                  | -         | 1        | PEC03SAAN                                                                                  | SULLINS                                 | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                     |
| 8        | L1                   | -         | 1        | FDSD0420-H-100M                                                                            | MURATA                                  | 10µH         | INDUCTOR; SMT; SHIELDED; 10µH; 20%; 1.7A                                                                                      |
| 9        | LX                   | -         | 1        | 131-4353-00                                                                                | TEKTRONICS                              | 131-4353-00  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                               |
| 10       | MH1-MH4              | -         | 4        | 9032                                                                                       | KEYSTONE                                | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                     |
| 11       | R1                   | -         | 1        | CRCW06033M48FK                                                                             | VISHAY                                  | 3.48M        | RES; SMT (0603); 3.48M; 1%; ± 100PPM/°K; 0.1W                                                                                 |
| 12       | R2                   | -         | 1        | CRCW06034023FK; ERJ-3EKF4023                                                               | VISHAY; PANASONIC                       | 402K         | RESISTOR; 0603; 402KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
| 13       | R5                   | -         | 1        | ERJ-2GE0R00                                                                                | PANASONIC                               | 0            | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                           |
| 14       | SU1                  | -         | 1        | 2SN-BK-G                                                                                   | SAMTEC                                  | 2SN-BK-G     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.175IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED               |
| 15       | U1                   | -         | 1        | MAX17291ANT+                                                                               | MAXIM                                   | MAX17291ANT+ | EVKIT PART-IC; MAX17291ANT+; HIGH-VOLTAGE MICROPOWER BOOST CONVERTER; PACKAGE OUTLINE: 21-100128; PACKAGE CODE: N60E1+1; WLP6 |
| 16       | PCB                  | -         | 1        | MAX17291WLP                                                                                | MAXIM                                   | PCB          | PCB:MAX17291WLP                                                                                                               |
| 17       | C3, C4               | DNP       | 0        | N/A                                                                                        | N/A                                     | OPEN         | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                       |
| 18       | C7                   | DNP       | 0        | N/A                                                                                        | N/A                                     | N/A          | CAPACITOR; 0402 PACKAGE; GENERIC                                                                                              |
| 19       | R3                   | DNP       | 0        | N/A                                                                                        | N/A                                     | OPEN         | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                              |
| 20       | R4                   | DNP       | 0        | N/A                                                                                        | N/A                                     | SHORT        | PACKAGE OUTLINE 0603 RESISTOR                                                                                                 |
| 27 TOTAL | 27 TOTAL             | 27 TOTAL  | 27 TOTAL | 27 TOTAL                                                                                   | 27 TOTAL                                | 27 TOTAL     | 27 TOTAL                                                                                                                      |

Evaluates: MAX17291 in WLP

## MAX17291 WLP EV Kit Schematic Diagram

<!-- image -->

│

Evaluates: MAX17291 in WLP

## MAX17291 WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX17291 WLP EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX17291 WLP EV Kit PCB Layout-Top View

MAX17291 WLP EV Kit PCB Layout-Bottom View

<!-- image -->

MAX17291 WLP EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

│

Evaluates: MAX17291 in WLP

## MAX17291 WLP Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17291 in WLP
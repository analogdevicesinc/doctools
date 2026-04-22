<!-- lastmod 2023-06-02 -->
## MAX17291 TDFN Evaluation Kit

## General Description

The  MAX17291  TDFN  evaluation  kit  (EV  kit)  evaluates  the  MAX17291  IC  in  the  TDFN  package.  The MAX17291  is  a  low  quiescent  current  boost  (stepup)  DC-DC  converter  with  a  1A  peak  inductor  current limit,  TrueShutdown™,  and  short-circuit  protection.  The MAX17291  EV  kit  operates  over  an  input  range  of 1.8V  to  5.5V  and  provides  resistor-configurable  output voltages  from  5.5V  to  20V.  The  EV  kit  comes  with  the MAX17291ATA+ (TDFN) installed.

## Benefits and Features

- Evaluates the MAX17291 IC in an 8-pin (2mm x 2mm) TDFN
- 1.8V to 5.5V Input Range
- 5.5V to 20V Configurable Output Voltage
- Up to 1A Input Peak Current
- Proven 2-Layer, 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX17291 TDFN EV Kit Files

| FILE                        | DESCRIPTION              |
|-----------------------------|--------------------------|
| MAX17291 TDFN EV BOM        | EV Kit Bill of Materials |
| MAX17291 TDFN EV PCB Layout | EV Kit Layout            |
| MAX17291 TDFN EV Schematic  | EV Kit Schematic         |

Ordering Information appears at end of data sheet.

TrueShutdown is a trademark of Maxim Integrated Products, Inc.

319-100611; Rev 0; 10/20

Evaluates: MAX17291 in

TDFN Package

## Quick Start

## Required Equipment

- MAX17291 TDFN EV Kit
- 1.8V to 5.5V, 5A DC Power Supply
- Electronic Load Capable of 310mA
- Digital Voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify that a shunt is installed on pins 1 and 2 of jumpers JU1 (EV kit enabled).
- 2) Verify that a shunt is installed on pins 1 and 2 of jumpers JU2 (POK pulled up to IN through R6).
- 3) Connect the power supply between the IN and nearest GND terminal posts.
- 4) Connect the electronic load between the OUT and nearest GND terminal posts.
- 5) Connect the DVM between the OUT and nearest GND terminal posts.
- 6) Set the power supply to 5.5V and turn it on.
- 7) Set the electronic load to 310mA at constant current mode, then enable the electronic load.
- 8) Verify that the voltage at the OUT terminal post is approximately 12V.

<!-- image -->

## MAX17291 TDFN Evaluation Kit

## Detailed Description of Hardware

The MAX17291 TDFN EV kit evaluates the MAX17291 IC in a TDFN package. The MAX17291 is a high efficiency, low  quiescent  current,  step-up  DC-DC  converter  with TrueShutdown and short-circuit protection. True Shutdown disconnects the output from the input with no forward or reverse  current.  The  MAX17291  TDFN  EV  kit  operates over an input range of 1.8V to 5.5V. The EV kit provides resistor-configurable output voltages from 5.5V to 20V.

The  EV  kit  comes  with  the  MAX17291ATA+  (TDFN) installed  and  is  configured  for  a  12V  output.  The  12V output can deliver 310mA of current at 5.5V input.

## EN

The MAX17291 TDFN EV kit provides a jumper JU1 to enable or disable the MAX17291. Refer to Table 1 for JU1 jumper settings.

## Table 1. EN (JU1) Jumper Settings

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2*             | Enabled. EN = IN*  |
| 2-3              | Disabled. EN = GND |

## Component Suppliers

| SUPPLIER    | WEBSITE             |
|-------------|---------------------|
| Murata/TOKO | www.murata.com      |
| Nexperia    | www.nexperia.com    |
| Nichicon    | www.nichicon-us.com |
| Taiyo Yuden | www.ty-top.com      |

Note: Indicate that you are using the MAX17291 when contact- ing these component suppliers.

## Power OK (POK)

The MAX17291 features a power-ok (POK) output to indi -cate the device regulation status. The POK is open-drain and requires a pullup resistor between 10kΩ to 100kΩ. The EV kit  provides  a  jumper  JU2  to  select  a  pullup  voltage source for POK. See Table 2 for jumper JU2 setting.

## Table 2. POK (JU2) Jumper Settings

| SHUNT POSITION   | DESCRIPTION                                                                                                             |
|------------------|-------------------------------------------------------------------------------------------------------------------------|
| 1-2*             | POK pulled up to IN through R6 (100kΩ).                                                                                 |
| 2-3              | POK pulled up to OUT through R7 (100kΩ). Install an appropriate resistor value onto R5 to properly bias D1.             |
| Not Installed    | POK pulled up to an external voltage source (between 0V to 5.5V) through an external resistor (between 10kΩ and 100kΩ). |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAX17291EVK#TDFN | EV Kit |

#Denotes RoHS compliant.

## Evaluates: MAX17291 in TDFN Package

│

## MAX17291 TDFN Evaluation Kit

## MAX17291 TDFN EV Kit Bill of Materials

| ITEM     | REF_DES              | DNI/DNP   | QTY      | MFG PART #                                                                                 | MANUFACTURER                            | VALUE        | DESCRIPTION                                                                                                                     |
|----------|----------------------|-----------|----------|--------------------------------------------------------------------------------------------|-----------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|
| 1        | C1, C8               | -         | 2        | CL21B106KPQNNN; LMK212AB7106KG; C0805X106K8RACAUTO; GRM21BR71A106KA73; C2012X7R1A106K125AC | SAMSUNG; TAIYO YUDEN; KEMET; MURATA;TDK | 10µF         | CAP; SMT (0805); 10µF; 10%; 10V; X7R; CERAMIC CHIP                                                                              |
| 2        | C2, C5               | -         | 2        | GRM31CR71H475KA12; GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL                    | MURATA;MURATA; MURATA; TAIYO YUDEN      | 4.7µF        | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7µF; 50V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R                            |
| 3        | C6                   | -         | 1        | UWJ0J151MCL                                                                                | NICHICON                                | 150µF        | CAP; SMT; 150µF; 20%; 6.3V; ALUMINUM-ELECTROLYTIC                                                                               |
| 4        | C7                   | -         | 1        | GRM155R71H102JA01; GCM155R71H102JA37                                                       | MURATA; MURATA                          | 1000PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                  |
| 5        | D1                   | -         | 1        | PESD5V0U1UA                                                                                | NEXPERIA                                | 5V           | DIODE; TVS; SMT (SOD-323); VRM = 5V                                                                                             |
| 6        | EN, POK, TP3, TP5    | -         | 4        | 5012                                                                                       | KEYSTONE                                | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 7        | IN, OUT, PGND, PGND1 | -         | 4        | 108-0740-001                                                                               | EMERSON NETWORK POWER                   | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                        |
| 8        | JU1, JU2             | -         | 2        | PEC03SAAN                                                                                  | SULLINS                                 | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                       |
| 9        | L1                   | -         | 1        | FDSD0420-H-100M                                                                            | MURATA                                  | 10µH         | INDUCTOR; SMT; SHIELDED; 10µH; 20%; 1.7A                                                                                        |
| 10       | LX                   | -         | 1        | 131-4353-00                                                                                | TEKTRONICS                              | 131-4353-00  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                 |
| 11       | MH1-MH4              | -         | 4        | 9032                                                                                       | KEYSTONE                                | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                       |
| 12       | R1                   | -         | 1        | CRCW06033M48FK                                                                             | VISHAY                                  | 3.48M        | RES; SMT (0603); 3.48M; 1%; ± 100PPM/°K; 0.1W                                                                                   |
| 13       | R2                   | -         | 1        | CRCW06034023FK; ERJ-3EKF4023                                                               | VISHAY; PANASONIC                       | 402K         | RESISTOR; 0603; 402K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
| 14       | R6, R7               | -         | 2        | ERA-3AEB104; AT0603BRD07100KL                                                              | PANASONIC; YAGEO                        | 100K         | RESISTOR; 0603; 100KΩ; 0.1%; 25PPM; 0.1W; THIN FILM                                                                             |
| 15       | R8                   | -         | 1        | ERJ-2GE0R00                                                                                | PANASONIC                               | 0            | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                             |
| 16       | SU1, SU2             | -         | 2        | 2SN-BK-G                                                                                   | SAMTEC                                  | 2SN-BK-G     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.175IN; BLACK; INSULATION = PBT;PHOSPHOR BRONZE CONTACT = GOLD PLATED                  |
| 17       | TP1, TP2, TP4, TP6   | -         | 4        | 5011                                                                                       | KEYSTONE                                | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 18       | U1                   | -         | 1        | MAX17291ATA+                                                                               | MAXIM                                   | MAX17291ATA+ | EVKIT PART-IC; MAX17291ATA+; HIGH-VOLTAGE MICROPOWER BOOST CONVERTER; PACKAGE OUTLINE: 21-0168; PACKAGE CODE: T822+3C; TDFN8-EP |
| 19       | PCB                  | -         | 1        | MAX17291TDFN                                                                               | MAXIM                                   | PCB          | PCB:MAX17291TDFN                                                                                                                |
| 20       | C3, C4               | DNP       | 0        | N/A                                                                                        | N/A                                     | OPEN         | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                         |
| 21       | R3                   | DNP       | 0        | N/A                                                                                        | N/A                                     | OPEN         | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                |
| 22       | R5                   | DNP       | 0        | CRCW12060000ZS; ERJ-8GEY0R00                                                               | VISHAY DALE; PANASONIC                  | 0            | RESISTOR; 1206; 0 Ω ; 0%; JUMPER; 0.25W; THICK FILM                                                                             |
| 23       | R4                   | DNP       | 0        | N/A                                                                                        | N/A                                     | SHORT        | PACKAGE OUTLINE 0603 RESISTOR                                                                                                   |
| 36 TOTAL | 36 TOTAL             | 36 TOTAL  | 36 TOTAL | 36 TOTAL                                                                                   | 36 TOTAL                                | 36 TOTAL     | 36 TOTAL                                                                                                                        |

## Evaluates: MAX17291 in TDFN Package

## MAX17291 TDFN EV Kit Schematic Diagram

<!-- image -->

│

Evaluates: MAX17291 in TDFN Package

## MAX17291 TDFN EV Kit PCB Layout Diagrams

<!-- image -->

MAX17291 TDFN EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX17291 TDFN EV Kit PCB Layout-Top View

MAX17291 TDFN EV Kit PCB Layout-Bottom View

<!-- image -->

MAX17291 TDFN EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

│

## Evaluates: MAX17291 in TDFN Package

## MAX17291 TDFN Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17291 in

TDFN Package
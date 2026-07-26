<!-- lastmod 2022-08-05 -->
## MAX20019/MAX20020 Evaluation Kits

## General Description

The MAX20019/MAX20020 evaluation kits (EV kits) are fully  assembled  and  tested  PCBs  that  demonstrate  the MAX20019  and  MAX20020  dual  step-down  converters with integrated high-side and low-side MOSFETs.

The  EV  kits  provide  a  high-efficiency  power-conversion solution  and  generate  low  output  voltage  from  the  dual step-down converters: OUT1 steps down up to 16V high input to 3.3V to provide the power to OUT2, while OUT2 steps  down  the  OUT1  voltage  to  1.8V.  The  3.2MHz switching-frequency  operation  allows  for  the  use  of  allceramic capacitors and minimizes external components. The EV kits feature on/off jumper controls to enable/disable OUT1 and OUT2.

## Features

- 3.5V to 16V Operating Supply Voltage
- 5V, 3.3V, 3.0V, and 2.8V Options at 500mA Synchronous Step-Down Converter (OUT1)
- 1.8V, 1.5V, 1.2V, and 1V Options at 500mA Synchronous Step-Down Converter (OUT2)
- 3.2MHz Operation Minimizes System Solution Size
- Minimized External Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluate: MAX20019/MAX20020

## Quick Start

## Required Equipment

- MAX20019 or MAX20020 EV kit
- Variable 25V power supply capable of supplying 2A
- Electronic load
- Two voltmeters

## Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Preset  the  power  supply  to  8V.  Turn  off  the  power supply.
- 2) Preset  the  electronic  load  to  300mA.  Turn  off  the electronic load.
- 3) Connect the positive lead of the power supply to the VSUP PCB pad.  Connect  the  negative  lead  of  the power supply to the PGND PCB pad.
- 4) Connect the positive terminal of the electronic load to the VOUT2 PCB pad. Connect the negative terminal of the electronic load to the PGND2 PCB pad.
- 5) Enable outputs VOUT1 and VOUT2 by installing the shunt on jumper JU1.
- 6) Turn on the power supply.
- 7) Verify that the voltage across the VOUT1 and PGND1 PCB pads is 3.3V.
- 8) Verify that the voltage across the VOUT2 and PGND2 PCB pads is 1.8V.
- 9) Turn on the electronic load.
- 10)  Verify that the voltage across the VOUT1 and PGND1 PCB pads is 3.3V ±3%.
- 11)  Verify that the voltage across the VOUT2 and PGND2 PCB pads is 1.8V ±3%.
- 12) Turn off the electronic load.
- 13) Turn off the power supply.

<!-- image -->

## MAX20019/MAX20020 Evaluation Kits

## Detailed Description

The MAX20019/MAX20020 EV kits integrate dual highefficiency  DC-DC  step-down  converters.  OUT1  steps down a high input voltage to 3.3V at up to 500mA, while OUT2  steps  down  OUT1  voltage  to  1.8V.  VOUT1  and VOUT2 can be enabled/disabled by JU1 jumper.

## Enable Control (JU1)

The  JU1  jumper  is  used  to  enable  or  disable  VOUT1 and  VOUT2.  Install  a  shunt  on  JU1  to  enable  VOUT1 and  VOUT2  normal  operation.  Remove  shunts  on  JU1 to enter shutdown mode. See Table 1 for enable control.

Evaluate: MAX20019/MAX20020

## Table 1. Enable Control (JU1)

| SHUNT POSITION   | MODE             |
|------------------|------------------|
| On               | Normal Operation |
| Off              | Shutdown         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20019EVKIT# | EV Kit |
| MAX20020EVKIT# | EV Kit |

# Denotes RoHS compliance.

│

## MAX20019/MAX20020 Evaluation Kits

## MAX20019/MAX20020 EV Kits Bill of Materials

| MANUFACTURER   | TDK                                                                                            | TDK                                                                                                              | TDK                                                                                             | TDK                                                                                              | TDK                                                                                       |                            | TDK                                                                                                              | TDK                                                                                        | TDK                                                                                              | SULLINS                                                   | TDK                                                          | TDK                                                          | WURTH ELECTRONICS INC.                                     | WEICO WIRE                                                                               | VISHAY DRALORIC                                     | MAXIM                                                                            | KEYSTONE                                                                | MAXIM              | TDK                                                                                          |
|----------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|----------------------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------|----------------------------------------------------------------------------------|-------------------------------------------------------------------------|--------------------|----------------------------------------------------------------------------------------------|
| MFG PART #     | CGA5L1X7R1V106K                                                                                | CGA3E1X7R0J225K                                                                                                  | CGA2B1X7R1C104K050BC                                                                            | CGA5L1X7R0J226M                                                                                  | CGA4J1X7S0G226M                                                                           | DNP                        | CGA2B2X7R1H102K050BA                                                                                             | CGA2B3X7R1H104K                                                                            | CGA3E2X7R1H102M080AA                                                                             | PEC03SAAN                                                 | TFM252012ALMA-3R3MTAA                                        | TFM201610ALMA-2R2MTAA                                        | 742792116                                                  | 9020 BUSS                                                                                | CRCW04020000Z0EDHP                                  | MAX20019ATBA/V+                                                                  | 5010                                                                    | -                  | CGA5L1X7R1C106M160AC                                                                         |
| DESCRIPTION    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R AUTO | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 6.3V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R AUTO | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R AUTO | CAPACITOR; SMT (1206); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 4V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7S; | AUTO DO NOT POPULATE (DNP) | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R AUTO | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R AUTO | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS | INDUCTOR; SMT; ORIGINAL FINE COPPER; 3.3UH; TOL=+/-20%; 2.2A | INDUCTOR; SMT; ORIGINAL FINE COPPER; 2.2UH; TOL=+/-20%; 2.1A | INDUCTOR; SMT (1206); FERRITE-BEAD; 500; TOL=+/- 25%; 2.5A | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM | EVKIT PART-IC; VCON; 3.2MHZ; 500MA DUAL CONVERTER FOR AUTOMOTIVE CAMERA; TDFN10- | EP TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; NOT FOR COLD TEST | PCB: MAX20019EVKIT | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +125 |
| VALUE          | 10UF                                                                                           | 2.2UF                                                                                                            | 0.1UF                                                                                           | 22UF                                                                                             | 22UF                                                                                      | DNP                        | 1000PF                                                                                                           | 0.1UF                                                                                      | 1000PF                                                                                           | N/A                                                       | 3.3UH                                                        | 2.2UH                                                        | 500                                                        | N/A                                                                                      | 0                                                   | N/A                                                                              | N/A                                                                     | -                  | 10UF                                                                                         |
| QTY            | 1                                                                                              | 1                                                                                                                | 1                                                                                               | 1                                                                                                | 1                                                                                         |                            | 1                                                                                                                | 2                                                                                          | 1                                                                                                | 1                                                         | 1                                                            | 1                                                            | 1                                                          | 7                                                                                        | 1                                                   | 1                                                                                | 1                                                                       | 1                  |                                                                                              |
| REF DES        | C1                                                                                             | C2                                                                                                               | C3                                                                                              | C4                                                                                               | C5                                                                                        | C6*                        | C7                                                                                                               | C8, C10                                                                                    | C9                                                                                               | JU1                                                       | L1                                                           | L2                                                           | L3                                                         | PGND, PGND1, PGND2, VOUT1, VOUT2, VSUP, VSUPF                                            | R1                                                  | U1                                                                               | VBIAS                                                                   | -                  | - when populated                                                                             |

Evaluate: MAX20019/MAX20020

DEGC; TC=X7R AUTO

## MAX20019/MAX20020 EV Kits Schematic

<!-- image -->

│

Evaluate: MAX20019/MAX20020

## MAX20019/MAX20020 Evaluation Kits

## MAX20019/MAX20020 EV Kits PCB Layouts

<!-- image -->

MAX20019/MAX20020 EV Kits Component Placement Guide-Top Silkscreen

<!-- image -->

MAX20019/MAX20020 EV Kits Component Placement Guide-Bottom Silkscreen

Evaluate: MAX20019/MAX20020

│

Evaluate: MAX20019/MAX20020

## MAX20019/MAX20020 EV Kits PCB Layouts (continued)

MAX20019/MAX20020 EV Kits PCB Layout-Top

<!-- image -->

MAX20019/MAX20020 EV Kits PCB Layout-Bottom

<!-- image -->

│

## MAX20019/MAX20020 Evaluation Kits

Evaluate: MAX20019/MAX20020

## MAX20019/MAX20020 EV Kits PCB Layouts (continued)

<!-- image -->

MAX20019/MAX20020 EV Kits PCB Layout-Top Mask

<!-- image -->

MAX20019/MAX20020 EV Kits PCB Layout-Bottom Mask

│

## MAX20019/MAX20020 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 8/17            | Initial release                    | -               |
|                 1 | 1/20            | Updated Ordering Information table | 2               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserYes the riJht to chanJe the circuitry and speci¿cations without notice at any time.

<!-- image -->

│

Evaluate: MAX20019/MAX20020
<!-- lastmod 2022-08-04 -->
## MAX20800 Evaluation Kit

## General Description

The  MAX2080XXEVKIT#  family  of  evaluation  kits  (EV kits)  serve  as  a  reference  platform  for  evaluating  the MAX20800 and MAX20801 maximum power point tracking (MPPT) ICs. These single-chip, integrated switching regulators provide an extremely compact, low cost, highly efficient, fast,  accurate  and  reliable  power  delivery  solution  for photovoltaic (PV) modules. Refer to the MAX20800 and MAX20801 IC data sheets for more information.

The EV kit comprises a fully-assembled and tested PCB implementation  of  the  MAX20800.  Input  and  output connectors for three photovoltaic cell strings are included for flexibility and ease-of-use with standard 60 or 72-cell crystalline PV modules.

## Features

- Performs MPPT on three sets of 20-24 Series-Connected PV Cells
- Fast MPPT Reacts Quickly to Changing Conditions
- Small 3,800mm 2  Solution Size
- Integrated Voltage-Limiting Clamps Output Voltage
- Integrated Current-Limiting Clamps Output Current
- Active Bypass Function Eliminates Hot Spots
- Supports Flash and EL Testing
- Peak 99.1%, CEC 98.7%, and Euro 98.3% Efficiency
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX20800, MAX20801

## Quick Start

## Required Equipment

- MAX20800 EV kit
- Six-busbar PV module
- Electronic load
- Multimeters

## Procedure for One Cell String

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the positive and negative terminals of a single cell string to PV1+ and PV1- terminals of the EV kit.
- 2) Connect the positive terminal of the load to PV2- and the negative terminal of the load to OUT-.
- 3) Expose  the  PV  module  to  steady  state  irradiance, either by an indoor light table or in outdoor conditions.
- 4) It is important to ensure the proper connection polarity of the PV Cells with respect to the physical PCB terminal connectors, see Testing Configuration diagrams.

Ordering Information appears at end of data sheet.

<!-- image -->

## Procedure for Three Cell Strings

Connecting all three cell strings from a PV Module to the EV  kit  requires  a  six-busbar  module,  whereby  the  two electrical connections between the three cell strings are intentionally left independent. If such a PV Module is not available, it is recommended to test one cell string.

To connect a six-busbar module to the EV kit, follow the same  procedure  as  above  but  connect  one  cell  string to  each  of  the  PV1+/PV1-,  PV2+/PV2-,  and  PV3+/PV3input terminals. Connect the output load the OUT-/OUT+ terminals.

## Detailed Description of Hardware

The MAX20800 IC is a monolithic, high-frequency stepdown switching regulator optimized for performing MPPT on 20-24 crystalline photovoltaic cells. In order to support the MAX20800  application,  PV  Modules  must  be  designed with  six-busbar  connections  to  the  junction  box,  as opposed  to the typical four. Detailed product  and application  information  is  provided  in  the  MAX20800  IC data sheet.

## Always Enabled

The  switching  regulator  is  always  enabled  so  long  as power is available on the input pins.

## MPPT Tracking

The  MAX20800  switching  regulator  performs  MPPT stepping  every  0.4ms.  This  speed  is  fast  enough  to present a quasi-static IV curve to standard PV string and panel inverter loads, but not fast enough to operate with typical PV simulator power supplies or flash testers. For this reason, it is encouraged to test the MAX20800 EV kit with the PV module exposed to the steady state irradiance of  an  indoor  light  table  or  on-sun  as  an  input,  and  an electronic load on the output.

## Output Limiting

The output voltage and current are electronically limited by the switching regulator as described in the table below.

| IC PART   |   OUTPUTVOLTAGE LIMIT (V) |   OUTPUTCURRENT LIMIT (A) |
|-----------|---------------------------|---------------------------|
| MAX20800  |                      11.7 |                      11.3 |
| MAX20800A |                      13.6 |                      11.3 |
| MAX20801A |                      10.6 |                      11.9 |
| MAX20801B |                      11.2 |                      11.9 |
| MAX20801C |                      12.4 |                      11.9 |

## Evaluates: MAX20800, MAX20801

The  output  IV  characteristics  are  such  that  maximum output power is delivered into any voltage or current load so long as the output voltage and current limits are not exceeded. If the output voltage exceeds the voltage limit the  switching  regulator  will  actively  sink  current.  If  the output current exceeds the current limit the cell string will be bypassed by a low-resistance FET.

Meanwhile, the voltage and current capability of the input connected PV cell strings can exceed these output limits but  should  remain  below  the  maximum  input  operating conditions specified in the IC data sheet.

## Input Voltage and Current

Each  cell string  input  voltage  and  current  can  be measured  directly at its respective PV+/PVinput terminals.  Voltage  should  be  measured  directly  at  the pads with kelvin connections, meanwhile a low resistance (i.e., 1mΩ) shunt should be placed in series with PV+ to measure current. The shunt should be carefully calibrated to minimize measurement errors.

## Output Voltage and Current

The output voltage and current can be measured at the OUT-/PV2- terminals while operating a single cell string or OUT-/OUT+ while operating with all three cell strings. Voltage  should  be  measured  directly  at  the  pads  with kelvin  connections,  meanwhile  a  low  resistance  (i.e., 1mΩ) shunt should be placed in series with the output to measure current. The shunt should be carefully calibrated to minimize measurement errors.

## Efficiency Testing

Both  power  conversion  and  MPPT  efficiency  can  be tested  by  comparing  the  power  output  to  a  Reference PV module. In order to avoid the influence of dynamically changing  conditions  while  operating  on-sun,  it  is  highly suggested to operate the DUT and Reference modules at the same time with near simultaneous data acquisitions.

MPPT  Efficiency  can  be  measured  by  comparing  the input power to the IC to that delivered by the Reference module  operating  at  the  MPP  condition.  The  electronic load can be programmed to operate at MPP or perform continual IV sweeps. If performing IV sweeps, it is suggested to dwell at each measurement point for a minimum of 5ms to ensure the IC settles at the new load-dependent operating point.

Carefully  note  the  connection  order  and  polarity  of  PV input  terminals  when  connecting  the  cell  strings  to  the EV kit.

## MAX20800 Evaluation Kit

## Testing Configuration

<!-- image -->

## Component List

| PART                                                                                                  |   QTY | DESCRIPTION                                  |
|-------------------------------------------------------------------------------------------------------|-------|----------------------------------------------|
| U1, U2, U3                                                                                            |     3 | MAX208000 MPPT Regulation IC                 |
| D2                                                                                                    |     1 | SCHOTTKY RECTIFIER, 10A, 200V, POWERDI5      |
| L1, L2, L3                                                                                            |     3 | POWER INDUCTOR                               |
| C21                                                                                                   |     1 | Capacitor, 0.1µF, 100V, X7R, 0603            |
| C19, C101, C103, C104, C106-C110, C202-C205, C207- C210, C301-C304, C307-C309, C315- C318, C320, C337 |    30 | Capacitor, 10µF ± 10%, 20%, 25V, X6S, 0805   |
| C111, C211, C311                                                                                      |     3 | Capacitor, 1.0µF ± 10%, 20%, 6.3V, X6S, 0402 |

## Ordering Information

| PART            | TYPE                 |
|-----------------|----------------------|
| MAX20800EVKIT#  | EV Kit for MAX20800  |
| MAX20800AEVKIT# | EV Kit for MAX20800A |
| MAX20801AEVKIT# | EV Kit for MAX20801A |
| MAX20801BEVKIT# | EV Kit for MAX20801B |
| MAX20801CEVKIT# | EV Kit for MAX20801C |

Evaluates: MAX20800, MAX20801

| PART                                                      |   QTY | DESCRIPTION                                   |
|-----------------------------------------------------------|-------|-----------------------------------------------|
| C112, C212, C312                                          |     3 | Capacitor, 0.22µF ± 10%, 20%, 6.3V, X6S, 0402 |
| C66-C68, C79, C80, C94, C95, C323, C326, C332, C333, C335 |    12 | Capacitor, 0.1µF ± 10%, 20%, 25V, X7R, 0402   |
| R15                                                       |     1 | Resistor, 10Ω ± 5%, 0.1W, 0402                |
| C21                                                       |     1 | Capacitor, 0.1µF ± 10%, 20%, 100V, X7R, 0603  |
|                                                           |     1 | PCB# 35 - 900368 - 03 - 00                    |

│

## MAX20800 EV Kit Schematic

<!-- image -->

## MAX20800 EV Kit PCB Layout Diagrams

MAX20800 EV Kit-Top Silk Screen

<!-- image -->

MAX20800 EV Kit-Layer 1

<!-- image -->

Evaluates: MAX20800, MAX20801

│

Evaluates: MAX20800, MAX20801

## MAX20800 EV Kit PCB Layout Diagrams (continued)

MAX20800 EV Kit-Layer 2

<!-- image -->

MAX20800 EV Kit-Layer 3

<!-- image -->

│

Evaluates: MAX20800, MAX20801

## MAX20800 EV Kit PCB Layout Diagrams (continued)

MAX20800 EV Kit-Layer 4

<!-- image -->

MAX20800 EV Kit-Component Placement

<!-- image -->

│

## MAX20800 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION       | PAGES CHANGED   |
|-------------------|-----------------|-------------------|-----------------|
|                 0 | 2/19            | Initial release   | -               |
|                 1 | 5/21            | Updated schematic | 4               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserYes the riJht to chanJe the circuitr\ and speci¿cations without notice at an\ time.

<!-- image -->

│

Evaluates: MAX20800, MAX20801
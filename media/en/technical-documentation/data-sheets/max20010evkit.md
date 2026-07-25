<!-- lastmod 2022-08-02 -->
## MAX20010 Evaluation Kit

## General Description

The  MAX20010  evaluation  kit  (EV  kit)  demonstrates the MAX20010  automotive  single 6A step-down converter.  The  EV  kit  operates  over  an  input  range of  3V  to  5.5V,  with  the  output  set  for  1V  and  up  to 6A load.

## Features

- Differential Remote-Voltage Sensing
- 3V to 5.5V Input Supply Range
- I 2 C-Controlled 0.5V to 1.5875V Output Voltage Range
- 2.2MHz Operation
- ±2% Output-Voltage Accuracy
- Power-Good Output
- Current-Mode, Forced-PWM, and Skip Operation
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Recommended Equipment

- MAX20010 EV kit
- 6V, 3A DC power supply
- Electronic load capable of 6A
- Digital voltmeter (DVM)

Ordering Information appears at end of data sheet.

## Evaluates: MAX20010C, MAX20010D, MAX20010E

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on supplies until all connections are completed .

- 1) Set the power supply to 5V. Disable the power supply.
- 2) Verify that jumper JU2 has a shunt across pins 1-2 and jumpers JU1 and JU3 are open.
- 3) Connect the power supply between the PVDD and nearest PGND test points.
- 4) Connect the electronic load between the SD0 and nearest PGND test points.
- 5) Connect the DVM between the SD0 and nearest PGND test points.
- 6) Turn on the power supply.
- 7) Enable the electronic load.
- 8) Verify that the voltage at the SDO output pad is approximately 1V. Disable the power supply.

## Detailed Description of Hardware

## Enable (EN)

Place a shunt across pins 1-2 on jumper JU2 for normal operation. To place the device into shutdown mode, place the shunt across pins 2-3 on JU2. See Table 1 for jumper settings.

## Table 1. EN Configuration (JU1)

| SHUNT POSITION   | DESCRIPTION                                                     |
|------------------|-----------------------------------------------------------------|
| Pins 1-2*        | Connects the EN pin to the voltage at PVDD for normal operation |
| Pins 2-3         | Connects the EN pin to ground to enter shutdown mode            |

*Default position.

<!-- image -->

## MAX20010 Evaluation Kit

## Synchronization Input/Output (SYNC)

The EV kit  features  a  SYNC  connection  that  allows  for synchronization input or output. The function is set by the SO[1:0] bit, as defined in the MAX20010C/MAX20010D/ MAX20010E IC data sheet. Jumper JU3 connects a pullup resistor to PVDD. See Table 2 for bit description.

## I 2 C Slave Address (ADDR)

The EV kit provides jumper JU1 to set the ADDR register. Pulldown resistor R4 is used to set ADDR = 0. If ADDR = 1 is desired, then set a shunt across pins 1-2 on jumper JU1. Refer to Table 1 in the MAX20010C/MAX20010D/ MAX20010E IC data sheet for more details on I 2 C slave address.

## Power-Good Output ( PGOOD )

The EV kit  provides  a  PGOOD  test  point  to  monitor  the status  of  the  device  output.  PGOOD  asserts  low  when VSDO exceeds the PG\_OV and PG\_UV thresholds.  PG\_is deasserted after a UV/OV propagation delay if the output voltage is outside the PG\_UV/OV thresholds.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1-C3         |     3 | 47μF ±10%, 6.3V X7R ceramic capacitors (1210) Murata GCM32ER70J476K       |
| C4            |     0 | Not installed, ceramic capacitors                                         |
| C5            |     1 | 10μF ±10%, 16V X7R ceramic capacitor (1206) TDK C3216X7R1C106K            |
| C6            |     1 | 4.7μF ±10%, 16V X7R ceramic capacitor (0805) Murata GCM21BR71C475K        |
| C7            |     1 | 68μF ±20%, 10V, aluminum electrolytic capacitor Murata ECASD61A686M015K00 |
| C8            |     1 | 1μF ±10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H105K             |
| J1            |     1 | 20-pin (2 x 10) right-angle receptacle, 0.1in                             |
| JU1, JU2      |     2 | 3-pin headers, 2.54mm                                                     |
| JU3           |     1 | 2-pin header, 2.54mm                                                      |

## Evaluates: MAX20010C, MAX20010D, MAX20010E

## Table 2. SYNC Settings

| BIT     | BIT DESCRIPTION                                                                                                                                                       |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SO[1:0] | SYNC I/O Select 00 - Master: Input, rising edge starts cycle 01 - Master: Input, falling edge starts cycle 10 - Master: Output, falling edge starts cycle 11 - Unused |

## Output Voltage

Output voltage is adjustable by changing the VID registers.  Refer to Table 9 in the MAX20010C/MAX20010D/ MAX20010E IC data sheet. When increasing the output voltage, be aware of the preset maximum allowed voltage. The maximum can be adjusted with the VIDMAX register.  Refer  to  Table  4  in  the  MAX20010C/MAX20010D/ MAX20010E IC data sheet.

## PCB Layout Recommendations

Careful PCB layout is critical to performance.  Place the input capacitor (C5) next to the IC (see Figure 2).  Route the  sensing  signals  (RS\_)  away  from  the  high-speed switching nodes.

*EP = Exposed pad. /V denotes an automotive qualified part

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| L1            |     1 | 0.22μH inductor Coilcraft XAL4020-221ME                             |
| R1            |     1 | 0Ω ±1% resistor (0402)                                              |
| R2            |     1 | 100Ω ±1% resistor (0402)                                            |
| R3, R6-R9     |     5 | 1kΩ ±1% resistors (0402)                                            |
| R4            |     1 | 100kΩ ±1% resistor (0402)                                           |
| R5            |     1 | 10kΩ ±5% resistor (0402)                                            |
| R10           |     1 | 100Ω ±5% resistor (0402)                                            |
| U1            |     1 | Automotive step-down converter (20 TQFN-EP*) Maxim MAX20010DATPN/V+ |
| -             |     1 | 0.25in U-shaped wire loop, 20G plated solid copper                  |
| -             |     1 | Shunts                                                              |
| -             |     1 | PCB: MAX20010 EVALUATION KIT                                        |

│

## Evaluates: MAX20010C, MAX20010D, MAX20010E MAX20010 Evaluation Kit

Figure 1. MAX20010 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX20010 EV Kit Component Placement Guide-Component Side

Figure 3. MAX20010 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX20010 EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 5. MAX20010 EV Kit PCB Layout-Layer 3

<!-- image -->

Figure 6. MAX20010 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

#Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX20010EVKIT# | EV Kit |

│

## MAX20010 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/15            | Initial release                                                                          | -               |
|                 1 | 6/15            | Updated Figure 1                                                                         | 3               |
|                 2 | 11/17           | Updated the Component List (C1, C2, C3, C4, and U1)                                      | 2               |
|                 3 | 3/19            | Updated references to MAX20010 to indicate that EV kit evaluates MAX20010C and MAX20010D | 1-5             |
|                 4 | 5/19            | Updated General Description and Quick Start                                              | 1               |
|                 5 | 8/20            | Added MAX20010E                                                                          | 1-5             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied. 0a[im ,nteJrated reserYes tKe riJKt to cKanJe tKe circuitr\ and sSeci¿cations ZitKout notice at an\ time.

│

Evaluates: MAX20010C, MAX20010D,

MAX20010E
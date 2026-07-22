<!-- lastmod 2022-08-05 -->
## MAX77751 Evaluation Kit

## General Description

The MAX77751 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the  MAX77751,  the  standalone  3.15A  USB  Type-C ® autonomous charger.

The EV kit is  a  switch-mode  charger  and  Smart  Power Selector™ with autonomous configuration. The MAX77751 can operate from 4.5V to 14V input, with the fast-charge current up to 3.15A and maximum input current limit of 3A.

The  EV  kit  features  USB  Type-C  CC  detection,  battery  charging  compliant  with  the  USB  Battery  Charging Specification  Revision  1.2  (BC1.2),  proprietary  adapter detection upon input insertion, and automatic configura -tion  of  the  charger  input  current  limit  to  the  maximum allowable current from the input source.

The MAX77751 has the reverse-boost capability, which is enabled by the ENBST pin to allow the 5.1V/1.5A output to CHGIN.

Figure 1. MAX77751 EV Kit Photo

<!-- image -->

USB Type-C and USB-C are registered trademarks of USB Implementers Forum. Smart Power Selector is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX77751

## Benefits and Features

- Up to 16V Protection
- 14V Maximum Input Operating Voltage
- 3.15A Maximum Charging Current
- 6A Discharge Current Protection
- No Firmware or Communication Required
- Integrated USB Detection
- Integrated CC Detection for USB Type-C
- Integrated BC1.2 Detection for Legacy SDP, DCP, and CDP
- Automatic Input Current Limit Configuration
- Input Voltage Regulation with Adaptive Input Current Limit (AICL)
- Reverse-Boost Capability up to 5.1V, 1.5A
- Pin Control of All Functions
- Resistor-Configurable Fast-Charge Current
- Resistor-Configurable Top-off Current
- ENBST Pin to Enable and Disable Reverse Boost
- STAT Pin to Indicate Charging Status
- INOKB Pin to Indicate Input Power-OK (POK)
- ITOPOFF Pin to Disable Charge
- Integrated Power Path
- Integrated Battery True-Disconnect FET
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX77751 Evaluation Kit

## Evaluates: MAX77751

Figure 2. Simplified Block Diagram

<!-- image -->

## Quick Start

## Required Equipment

- MAX77751 evaluation kit
- USB Type-C travel adapter and cable
- Power supply
- Battery/battery simulator/power supply with electronic load
- Oscilloscope
- Multi-meters

## Initial Test Setup

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Do not turn on the DC power supplies until all connections are made.
- 2) Confirm all jumpers are at their default positions as indicated in Table 1 (J3 Open, J4 Open).
- 3) Connect the battery/battery simulator/power supply to the loop labeled BATT and GND.
- 4) Connect the power supply to the loop labeled CHGIN.
- 5) The EV kit is now ready for use.

│

## MAX77751 Evaluation Kit

## Detailed Description of Hardware

Follow the initial test setup procedure.

## Battery Charger Test Setup

The battery charger can be tested in three different ways with  a  battery,  battery  simulator,  or  power  supply  with electronic load.

## Battery

- 1) Connect the 1 cell battery pack and current meter between BATT and GND. Note: Only use a battery with a charge termination voltage that matches that of the MAX77751 populated on the board.
- 2) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 3) Observe the current reading from the current meter. If the battery is discharged, the fast-charging current should match the setting with the external IFAST resistor (R4).

## Battery Simulator

- 1) Connect the battery simulator between BATT and GND, adjust the voltage to 3.8V with 3.5A current limit, and turn it on.

## Table 1. Default Shunt Positions and Jumper Descriptions

Figure 3. Battery Charger Test with Real Battery Pack

| JUMPER #   | DEFAULT POSITION   | FUNCTION                     |
|------------|--------------------|------------------------------|
| J3         | Open               | 1-2 Disable Charger          |
| J4         | Open               | 1-2 Enable the Reverse Boost |

<!-- image -->

Evaluates: MAX77751

- 2) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 3) Observe the current reading from the battery simulator and see if the fast-charging current matches with the external IFAST resistor.

## Power Supply with Electronic Load

- 1) Connect the power supply between BATT and GND and adjust the voltage to 3.8V with 3.5A current limit.
- 2) Connect the electronic load between BATT and GND and set the load current to 3.5A.
- 3) Turn on the power supply and electronic load.
- 4) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 5) Observe the current reading from the current meter 1 and 2 (the fast-charging current equals I1-I2) and see if this value matches with the external IFAST resistor.

Figure 4. Battery Charger Test with Battery Simulator

<!-- image -->

Figure 5. Battery Charger Test with Power Supply and Electronic Load

<!-- image -->

│

## MAX77751 Evaluation Kit

## BC1.2 and CC Detection Test Setup

- 1) Connect the battery/battery simulator/power supply with electronic load between BATT and GND. See the Battery Charger Test Setup section for details.
- 2) Plug in the USB Type-C cable from the PC or AC adaptor
- 3) Check if the MAX77751 configures the input current limit correctly.

## Reverse Boost Test Setup

- 1) Connect the power supply between BATT and GND, adjust the voltage to 3.8V with 3.5A current limit, and turn it on.
- 2) Apply the Jumper 4 to enable the reverse-boost mode.

## Table 2. STAT Output with Charging Status

| CHARGING STATUS                 | STAT                                                   | LOGIC STATE                                             | CHARGE STATUS LED                  |
|---------------------------------|--------------------------------------------------------|---------------------------------------------------------|------------------------------------|
| No Input                        | High Impedance                                         | High                                                    | OFF                                |
| Trickle, Precharge, Fast Charge | Repeat Low and High Impedance with 1Hz, 50% duty cycle | After an external diode and a capacitor rectifier, High | Blinking with 1Hz, 50% duty cycle. |
| Top-Off and Done                | Low                                                    | Low                                                     | Solid ON                           |
| Faults                          | High Impedance                                         | High                                                    | OFF                                |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE                     |
|-------------|--------------|-----------------------------|
| MURATA      | 770-436-1300 | www.murata-northamerica.com |
| SAMTEC      | 800-726-8329 | www.samtec.com              |
| TAIYO-YUDEN | 603-669-7587 | www.t-yuden.com             |
| TDK         | 847-803-6100 | www.comopnent.tdk.com       |
| VISHAY      | 408-970-5852 | www.vishay.com              |
| CYNTEC      | 510-668-5167 | www.cyntec.com              |
| PANASONIC   | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX77751 when contacting these component suppliers.

## Ordering Information

| PART NUMBER     | IC            | BATTERY TERMINATION VOLTAGE   |
|-----------------|---------------|-------------------------------|
| MAX77751CEVKIT# | MAX77751CEFG+ | 4.20V                         |
| MAX77751FEVKIT# | MAX77751FEFG+ | 4.35V                         |

Evaluates: MAX77751

- 3) Monitor the voltage of CHGIN and see whether it equals 5.1V.

## LED Indicator

- 1) Two LED indicators are installed on the EV kit: DS1 (Green) is for the STAT pin and DS2 (Red) is for INOKB.
- 2) The STAT pin is an open-drain and active low output that indicates charge status. See Table 2 for details.
- 3) INOKB is an open-drain and active low output that indicates the input status. If a valid input source is inserted and the buck converter starts switching, INOKB pulls low. When the reverse boost is enabled, INOKB pulls low to indicate the 5V output from CHGIN.

│

## MAX77751 Evaluation Kit

## MAX77751 EV Kit Bill of Materials

|   QTY | REF DES                                                            | MAXINV                    | MFG PART #                        | MANUFACTURER             | VALUE                 |
|-------|--------------------------------------------------------------------|---------------------------|-----------------------------------|--------------------------|-----------------------|
|     6 | BATT, CHGIN, GND1-GND3, SYS                                        | 01-9020BUSS20AWG-00       | 9020 BUSS                         | WEICO WIRE               | MAXIMPAD              |
|    12 | BATTS, BYPS, CC1, CC2, CHGINS, DN, DP, GNDS, INOKB, LX, STAT, SYSS | 02-TPMINI5000-00          | 5000                              | KEYSTONE                 | N/A                   |
|     2 | C1, C8                                                             | 20-002U2-A25              | C1005X5R1A225K050BC               | TDK                      | 2.2UF                 |
|     1 | C2                                                                 | 20-002U2-33B              | EMK105ABJ225MV; GRM155R61C225ME11 | TAIYO YUDEN;KEMET        | 2.2UF                 |
|     1 | C3                                                                 | 20-0010U-B78              | C1608JB1C106M080AB                | TDK                      | 10UF                  |
|     1 | C4                                                                 | 20-000U1-E2A              | GRM155R61C104KA88                 | MURATA                   | 0.1UF                 |
|     3 | C5, C7, C9                                                         | 20-0010U-16               | C1608X5R1A106K080AC               | TDK                      | 10UF                  |
|     1 | C6                                                                 | 20-0022U-23               | N/A                               | N/A                      | 22UF                  |
|     1 | DS1                                                                | 30-LTSTC190GKT-00         | LTST-C190GKT                      | LITE-ON ELECTRONICS INC. | LTST-C190GKT          |
|     1 | DS2                                                                | 30-LTSTC190EKT-00         | LTST-C190EKT                      | LITE-ON ELECTRONICS INC. | LTST-C190EKT          |
|     1 | J1                                                                 | 01-898430249031000024P-26 | 898-43-024-90-310000              | MILL-MAX                 | 898-43-024-90- 310000 |
|     1 | J2                                                                 | 01-101181930001LF5P-26    | 10118193-0001LF                   | FCI CONNECT              | 10118193- 0001LF      |
|     2 | J3, J4                                                             | 01-TSW10207TS2P-17        | TSW-102-07-T-S                    | SAMTEC                   | TSW-102-07- T-S       |
|     1 | L1                                                                 | 00-SAMPLE-01              | HTGH25201T-R47MSR-68              | CYNTEC                   | HTGH25201T- R47MSR-68 |
|     1 | R4                                                                 | 80-024K9-18               | ERJ-2RKF2492                      | PANASONIC                | 24.9K                 |
|     2 | R5, R6                                                             | 80-0470R-23               | CRCW0402470RFK                    | VISHAY DALE              | 470                   |
|     1 | R7                                                                 | 80-08K06-18               | ERJ-2RKF8061                      | PANASONIC                | 8.06K                 |
|     1 | U1                                                                 | 00-SAMPLE-02              | MAX77751                          | MAXIM                    | MAX77751              |
|     1 | PCB                                                                | EPCB77751SOLDEDRDOWN      | MAX77751SOLDEDRDOWN               | MAXIM                    | PCB                   |

Evaluates: MAX77751

## MAX77751 EV Kit Schematic

<!-- image -->

Evaluates: MAX77751

## MAX77751 Evaluation Kit

## MAX77751 EV Kit PCB Layout

Silk Top

<!-- image -->

Top

<!-- image -->

Evaluates: MAX77751

Internal2

<!-- image -->

Internal3

<!-- image -->

│

## MAX77751 EV Kit PCB Layout (continued)

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

│

## MAX77751 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------|-----------------|
|                 0 | 5/20            | Initial release                  | -               |
|                 1 | 7/20            | Updated the Ordering Information | 4               |
|                 2 | 9/20            | Updated the Ordering Information | 4               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX77751
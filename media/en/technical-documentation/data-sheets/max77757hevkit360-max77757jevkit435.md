<!-- lastmod 2022-08-05 -->
## MAX77757 Evaluation Kit

## General Description

The MAX77757 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the  MAX77757,  the  standalone  3.15A  USB  Type-C ® autonomous charger with JEITA.

The  MAX77757  can  operate  from  4.5V  to  13.7V  input, with  a  fast-charge  current  up  to  3.15A  and  a  maximum input  current  limit  of  3A.  The  MAX77757  is  offered  in several  variants  to  support  Li-ion  batteries  with  various termination voltages from 4.1V to 4.5V. It also has a 3.6V termination voltage option for LiFePO4 batteries.

The  EV  kit  features  USB  Type-C  CC  detection,  battery  charging  compliant  with  the  USB  Battery  Charging Specification  Revision  1.2  (BC1.2),  proprietary  adapter detection upon input insertion, and automatic configura -tion  of  the  charger  input  current  limit  to  the  maximum allowable current from the input source.

The MAX77757 has the reverse-boost capability, which is enabled by the ENBST pin to allow the 5.1V/1.5A output to CHGIN. The EV kit includes the variable resistor and thermistor to demonstrate the JEITA compliance.

Figure 1. MAX77757 EV Kit

<!-- image -->

USB Type-C and USB-C are registered trademarks of USB Implementers Forum. Smart Power Selector is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX77757

## Benefits and Features

- Up to 16V Protection
- 13.7V Maximum Input Operating Voltage
- 3.15A Maximum Charging Current
- 6A Discharge Current Protection
- No Firmware or Communication Required
- Integrated USB Detection
- Integrated CC Detection for USB Type-C
- Integrated BC1.2 Detection for Legacy SDP, DCP, and CDP
- Automatic Input Current Limit Configuration
- Input Voltage Regulation with Adaptive Input Current Limit (AICL)
- Reverse-Boost Capability up to 5.1V, 1.5A
- Termination Voltage
- 4.1V to 4.5V for Li-ion and Li-poly Batteries
- 3.6V/3.7V for LiFePO4 Battery
- Safety
- Charge Safety Timer
- JEITA Compliance with NTC Thermistor (MAX77757J)
- HOT/COLD Stop Charging with NTC Thermistor (MAX77757H)
-  Thermal Shutdown
- Pin Control of All Functions
- Resistor-Configurable Fast-Charge Current
- ENBST Pin to Enable and Disable Reverse Boost
- STAT Pin to Indicate Charging Status
- INOKB Pin to Indicate Input Power-OK (POK)
- THM Pin to Disable Charge
- Integrated Power Path
- Integrated Battery True-Disconnect FET
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## Initial Test Setup

The EV kit is fully assembled and tested. Follow the steps to verify board operation:

- 1) Do not turn on the DC power supply until all connections are made.
- 2) Confirm that all jumpers are at their default positions as indicated in Table 1.
- 3) Connect the battery/battery simulator/power supply to the loop labeled BATT and GND.
- 4) Connect the power supply to the loop labeled CHGIN.
- 5) The EV kit is now ready for use.

Figure 2. Simplified Block Diagram

<!-- image -->

## Quick Start

## Required Equipment

- MAX77757 evaluation kit
- USB Type-C travel adapter and cable
- Power supply
- Battery/battery simulator/power supply with electronic load
- Oscilloscope
- Multimeters

│

## Detailed Description of Hardware

Follow the initial test setup procedure.

## Battery Charger Test Setup

The battery charger can be tested in three different ways; with  a  battery,  battery  simulator,  or  power  supply  with electronic load.

## Battery

- 1) Connect the 1 cell battery pack and current meter between BATT and GND. Note: Only use a battery with a charge termination voltage that matches that of the MAX77757 populated on the board.
- 2) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 3) Observe the current reading from the current meter. If the battery is discharged, the fast-charging current should match the setting with the external IFAST resistor (R4).

## Battery Simulator

- 1) Connect the battery simulator between BATT and GND, adjust the voltage to 3.8V with 3.5A current limit, and turn it on.
- 2) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 3) Observe the current reading from the battery simulator and see if the fast-charging current matches with the external IFAST resistor.

## Power Supply with Electronic Load

- 1) Connect the power supply between BATT and GND and adjust the voltage to 3.8V with 3.5A current limit.
- 2) Connect the electronic load between BATT and GND and set the load current to 3.5A.

## Table 1. Default Shunt Positions and Jumper Descriptions

| JUMPER #   | DEFAULT POSITION   | FUNCTION                                                                           |
|------------|--------------------|------------------------------------------------------------------------------------|
| J3         | Short 5-6          | Short 1-2: Connect THM pin to a variable resistor                                  |
| J3         | Short 5-6          | Short 3-4: Connect THM pin to a themistor Short 3-4 Connect THM pin to a themistor |
| J3         | Short 5-6          | Short 5-6: Connect THM pin to a fixed value resistor                               |
| J3         | Short 5-6          | Short 7-8: Connect THM pin to GND                                                  |
| J4         | Open               | Short 1-2: Enable the Reverse Boost                                                |

Evaluates: MAX77757

- 3) Turn on the power supply and electronic load.
- 4) Connect the 5.0V/5.0A current-limited DC power supply between CHGIN and GND and turn it on.
- 5) Observe the current reading from the current meter 1 and 2 (the fast-charging current equals I1-I2) and see if this value matches with the external IFAST resistor.

<!-- image -->

Figure 3. Battery Charger Test with Real Battery Pack

Figure 4. Battery Charger Test with Battery Simulator

<!-- image -->

Figure 5. Battery Charger Test with Power Supply and Electronic Load

<!-- image -->

│

## MAX77757 Evaluation Kit

## BC1.2 and CC Detection Test Setup

- 1) Connect the battery/battery simulator/power supply with electronic load between BATT and GND. See the Battery Charger Test Setup section for details.
- 2) Plug in the USB Type-C cable from the PC or AC adaptor.
- 3) Check if the MAX77757 configures the input current limit correctly.

## Reverse Boost Test Setup

- 1) Connect the power supply between BATT and GND, adjust the voltage to 3.8V with 3.5A current limit, and turn it on.
- 2) Apply the Jumper 4 to enable the reverse-boost mode.

## Table 2. STAT Output with Charging Status

| CHARGING STATUS                 | STAT                                                   | LOGIC STATE                                             | CHARGE STATUS LED                 |
|---------------------------------|--------------------------------------------------------|---------------------------------------------------------|-----------------------------------|
| No Input                        | High Impedance                                         | High                                                    | OFF                               |
| Trickle, Precharge, Fast Charge | Repeat Low and High Impedance with 1Hz, 50% duty cycle | After an external diode and a capacitor rectifier, High | Blinking with 1Hz, 50% duty cycle |
| Top-Off and Done                | Low                                                    | Low                                                     | Solid ON                          |
| Faults                          | High Impedance                                         | High                                                    | OFF                               |

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

Note:

Indicate that you are using the MAX77757 when contacting these component suppliers.

## Ordering Information

| PART NUMBER        | IC               | TYPE   | THERMAL PROTECTION   |   TERMINATION VOLTAGE (V) |
|--------------------|------------------|--------|----------------------|---------------------------|
| MAX77757JEVKIT435# | MAX77757JEFG435+ | EV KIT | JEITA                |                      4.35 |
| MAX77757JEVKIT420# | MAX77757JEFG420+ | EV KIT | JEITA                |                       4.2 |
| MAX77757HEVKIT360# | MAX77757HEFG360+ | EV KIT | HOT/COLD STOP        |                       3.6 |

Evaluates: MAX77757

- 3) Monitor the voltage of CHGIN and see whether it equals 5.1V.

## LED Indicator

- 1) Two LED indicators are installed on the EV kit: DS1 (Green) is for the STAT pin and DS2 (Red) is for INOKB.
- 2) The STAT pin is an open-drain and active-low output that indicates charge status. See Table 2 for details.
- 3) INOKB is an open-drain and active-low output that indicates the input status. If a valid input source is inserted and the buck converter starts switching, INOKB pulls low. When the reverse boost is enabled, INOKB pulls low to indicate the 5V output from CHGIN.

│

## MAX77757 Evaluation Kit

## MAX77757 EV Kit Bill of Materials

|   QTY | REF DES                                                                         | MFG PART #                           | MANUFACTURER               | VALUE                |
|-------|---------------------------------------------------------------------------------|--------------------------------------|----------------------------|----------------------|
|     9 | BATT, CHGIN, GND1-GND6, SYS                                                     | 9020 BUSS                            | WEICO WIRE                 | MAXIMPAD             |
|    14 | BATTS, BYPS, CC1, CC2, CHGI - NS, DN, DP, GNDS, INOKB, LX, PVL, STAT, SYSS, THM | 5000                                 | KEYSTONE                   | N/A                  |
|     2 | C1, C8                                                                          | C1005X5R1A225K050BC                  | TDK                        | 2.2UF                |
|     1 | C2                                                                              | EMK105ABJ225MV;GRM155R61C 225ME11    | TAIYO YUDEN;KEMET          | 2.2UF                |
|     1 | C3                                                                              | C1608JB1C106M080AB                   | TDK                        | 10UF                 |
|     1 | C4                                                                              | GRM155R61C104KA88                    | MURATA                     | 0.1UF                |
|     3 | C5, C7, C9                                                                      | C1608X5R1A106K080AC                  | TDK                        | 10UF                 |
|     1 | C6                                                                              | N/A                                  | N/A                        | 22UF                 |
|     1 | DS1                                                                             | SML-311YTT86                         | ROHM                       | SML-311YTT86         |
|     1 | DS2                                                                             | SML-311UT                            | ROHM                       | SML-311UTT86         |
|     1 | J1                                                                              | 12401832E402A                        | AMPHENOL                   | 12401832E402A        |
|     1 | J2                                                                              | 10118193-0001LF                      | FCI CONNECT                | 10118193-0001LF      |
|     1 | J3                                                                              | PEC04DAAN                            | SULLINS ELECTRONICS CORP.  | PEC04DAAN            |
|     1 | J4                                                                              | TSW-102-07-T-S                       | SAMTEC                     | TSW-102-07-T-S       |
|     1 | L1                                                                              | HTEH25201T-R47MSR-63                 | CYNTEC                     | HTGH25201T-R47MSR-68 |
|     1 | MISC1                                                                           | AK67421-1-R                          | ASSMANN                    | AK67421-1-R          |
|     2 | R1, R3                                                                          | CRCW040210K0FK; RC0402FR-0710KL      | VISHAY DALE; YAGEO PHICOMP | 10K                  |
|     1 | R2                                                                              | 3296Y-1-503LF                        | BOURNS                     | 50K                  |
|     1 | R4                                                                              | ERJ-2RKF2492                         | PANASONIC                  | 24.9K                |
|     2 | R5, R6                                                                          | CR0402-16W-1651FT; CRC - W04021K65FK | VENKEL LTD.;VISHAY DALE    | 1.65K                |
|     1 | RT1                                                                             | NCP15XH103F03                        | MURATA                     | 10K                  |
|     1 | U1                                                                              | MAX77757                             | MAXIM                      | MAX77757             |
|     1 | PCB                                                                             | MAX77757                             | MAXIM                      | PCB                  |

Evaluates: MAX77757

## MAX77757 EV Kit Schematic

<!-- image -->

│

## MAX77757 Evaluation Kit

## MAX77757 EV Kit PCB Layout

MAX77757 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77757 EV Kit PCB Layout-Top

<!-- image -->

MAX77757 EV Kit PCB Layout-Internal 2

<!-- image -->

MAX77757 EV Kit PCB Layout-Internal 3

<!-- image -->

│

## MAX77757 EV Kit PCB Layout (continued)

MAX77757 EV Kit PCB Layout-Bottom

<!-- image -->

MAX77757 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 3/21            | Initial release                    | -               |
|                 1 | 3/21            | Updated Ordering Information table | 4               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX77757
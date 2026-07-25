<!-- lastmod 2022-08-02 -->
## MAX2046 Evaluation Kit

## General Description

The  MAX20046  evaluation  kit  (EV  kit)  demonstrates the  MAX20046  automotive  Hi-Speed  USB  2.0  protector switch IC, featuring overvoltage protection (OVP), electrostatic discharge (ESD) protection, and undervoltage lockout (UVLO)/overcurrent protection (OCP) for automotive USB applications.

The device protects the USB BUS, D+, and D- data lines from  overvoltage  conditions,    such  as  a  short-to-battery and  ESD  events.  UVLO  protects  the  BUS  against  lowvoltage  conditions  such  as  a  short-to-ground.  The  BUS OCP  uses  a  blanking  period  allowing  momentary  BUS shorts to be ignored. All faults can be monitored using the FAULT output signal.

The  device  can  pass  high-speed  USB  differential  (D+ and  D-)  signals  up  to  480Mbps  and  has  a  low  500mΩ RON (max) for the BUS and a 3.3Ω R ON (typ) for the D+ and D- lines. The EV kit is powered by the USB BUS. An on-board MAX15007A automotive regulator provides the IN reference voltage. If a 60mA/120mA current threshold is  desired,  the  MAX20046GTC/V+  can  be  ordered  and interchanged with U1.

## Benefits and Features

- Protects USB BUS, D+, and D- Signals from Overvoltages Up to 18V and ESD Events
- USB BUS Undervoltage Lockout
- 23mA/45mA (typ) USB BUS Overcurrent-Protection Threshold
- 1ms Overcurrent Blanking Time
- Passes 480Mbps USB Data Signals
- Low On-Resistance
- BUS: 500mΩ (max)
- D+ and D-: 3.3Ω (typ)
- FAULT Output Signal
- USB Powered
- Fully Assembled and Tested
- Evaluates the MAX20046 IC in a 12-Pin TQFN
- Package

Ordering Information appears at end of data sheet.

Evaluates: MAX2046

## Quick Start

## Required Equipment

- MAX20046 EV kit
- 5V, 2A DC power supply (Supply A)
- 18V, 2A DC power supply (Supply B)
- Logic function generator
- Oscilloscope

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Verify that shunts are installed as follows:
- JU1: Pins 1-2 (MAX20046 BUS switch disabled)
- JU2: Pins 1-2 (IN connected to on-board 3.3V reference)
- 2) Set the Supply A output to 5V, the Supply B output to 18V, and disable both outputs.
- 3) Set the logic function generator as follows: 3V P-P , 1.5V DC offset square wave, 500kHz, and disable the output.
- 4) Connect the Supply A positive output to the red BUS test point on the EV kit and connect the supply ground to the nearby black GND test point.
- 5) Connect the Supply B ground to the GND test point close to the HVBUS test point on the EV kit. Connect a voltage probe test lead to the Supply B positive output for later use.
- 6) Using  a  Type  A  USB  receptacle  inserted  into  J3, connect the logic function generator to D+ and GND.
- 7) Enable both power-supply outputs.
- 8) Enable the function generator output.
- 9) Install a shunt on jumper JU1, pins 2-3 (MAX20046 BUS switch enabled).
- 10) Use the oscilloscope to probe the HVBUS and HVD+ test points.
- 11) Verify that HVBUS is 5V and that the waveform on HVD+ is a 500kHz square wave and is approximately 3V P-P .
- 12) Momentarily touch the HVBUS test point on the EV kit with the voltage probe from the Supply B positive output.  The FAULT signal  asserts  a  logic-low  while the fault is present.

<!-- image -->

## Detailed Description of Hardware

The MAX20046 EV kit demonstrates the MAX20046 automotive  Hi-Speed  USB  2.0  protector  switch  IC,  featuring OVP, ESD protection, UVLO protection, and OCP for automotive USB applications.

The IC protects the USB BUS, D+, and D- data lines from overvoltage conditions,  such  as  a  short-to-battery  up  to 18V and ESD events up to 25kV (air) and 8kV (contact). The  OVP  feature  protects  the  D+  and  D-  lines  against high-voltage  conditions  such  as  a  short-to-BUS.  The UVLO feature protects the BUS line against low-voltage conditions  such  as  a  short-to-ground.  The  BUS  OCP threshold  is  fixed  at  23mA/45mA  (typ). A  1ms  blanking period allows momentary BUS shorts to be ignored, such as those created by hot-swapping a capacitive load. All faults can be monitored using the FAULT PCB pad, pulled up to IN through resistor R1.

The device can pass high-speed USB differential (D+ and D-) signals up to 480Mbps, and has a low 500mΩ R ON (max) for BUS and a 3.3Ω R ON  (typ) for the D+ and Ddata lines. The EV kit is powered by the USB BUS. The 3.3V automotive regulator (U2, MAX15007A) provides an on- board IN reference voltage. A user can provide a 3V to 3.6V IN reference voltage across the VIN and GND PCB pads.  The  MAX20046  (U1)  IC's  automotive  operating temperature range is from -40°C to +105°C.

Long  USB  wire  lengths  contribute  to  increased  wiring inductance,  resulting  in  slow  di/dt  and  dV/dt  during  a 'short to 18V' event. The device includes internal circuitry

## Table 1. MAX20046 Enable (JU1)

| SHUNT POSITION   | EN PIN                  | BUS SWITCH               |
|------------------|-------------------------|--------------------------|
| 1-2              | Connected to IN         | Disabled                 |
| 2-3              | Connected to GND        | Enabled                  |
| Not installed    | Connected to EN PCB pad | EN externally controlled |

## Table 2. MAX20046 IN Reference Voltage Selection (JU2)

| SHUNT POSITION   | IN PIN                     |
|------------------|----------------------------|
| 1-2              | Connected to on-board LDO  |
| 2-3              | Connected to IN test point |
| Not installed    | Unconnected                |

│

Evaluates: MAX20046

that turns off the switch between HVBUS and BUS during an overvoltage on HVBUS; however, energy stored in the wiring  inductance  can  cause  the  HVBUS  node  voltage to  quickly  increase.  The  RC  snubber  network  limits  the positive voltage spike caused by wiring inductance.

## Jumper Settings

## BUS Switch Enable (JU1)

Jumper  JU1  on  the  EV  kit  enables  the  device's  BUS switch. Test points EN and GND are provided to control U1's enable signal with an external controller. Refer to the EN Input section in the Electrical Characteristics table in the MAX20046 IC data sheet for proper EN logic  levels when using an external controller. See Table 1 for proper JU1 jumper settings.

## IN Reference Voltage Selection (JU2)

Jumper JU2 on the EV kit selects the reference voltage for the device's IN pin. IN can either be supplied by the USB BUS through the on-board automotive 3.3V regulator (U2, MAX15007A), or by a user-supplied reference voltage. Test points VIN and GND are provided to supply the device with an external 3V to 3.6V reference voltage. See Table 2 for proper JU2 jumper settings.

## ISET OCP Threshold Selection (JU3)

Jumper JU3 on the EV kit selects the current threshold for  OCP (overcurrent protection). With pins 1-2 shorted, the current threshold is 45mA. With pins 2-3 shorted, the current  threshold  is  23mA.  See  Table  3  for  proper  JU3 jumper settings.

## Table 3. MAX20046 EV Kit ISET OCP Threshold Selection (JU3)

| SHUNT POSITION   | ISET PIN          | CURRENT THRESHOLD   |
|------------------|-------------------|---------------------|
| 1-2              | Connected to IN   | 45mA                |
| 2-3              | Connected to GND  | 23mA                |
| Not installed    | Internal pulldown | 23mA                |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20046EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20046 EV Bill of Materials

|   QTY | REFERENCE           | DESCRIPTION                     | MANUFACTURER    | MFG PART NO.       |
|-------|---------------------|---------------------------------|-----------------|--------------------|
|     1 | C1                  | 0.1uF 0603 50V X7R 10%          | Murata          | GRM188R71H104KA93D |
|     2 | C2, C6              | 10uF 0805 25V X5R 20%           | Murata          | GRM219R61E106KA12D |
|     2 | C3, C4              | 1uF 0805 16V X7R 10%            | Murata          | GRM21BR71C105KA01K |
|     1 | C8                  | 10uF 0805 6.3V X7R 20%          | Murata          | GRM21BR70J106ME76L |
|     4 | C14 - C17           | OPEN                            |                 |                    |
|     1 | J1                  | USB A receptacle                | KYCON           | KUSBX-SMT-AS1N-B30 |
|     1 | J3                  | USB A plug                      | KYCON           | KUSBX-SMT2AP5S-B30 |
|     4 | L4 - L7             | 0 Ω Resistor 0402               | Any (Yageo)     | RC0402JR-070RL     |
|     3 | JU1, JU2, JU3       | 100 mil header                  | TE Connectivity | 4-103327-0         |
|     5 | EN, FAULT, GND, VIN | Wire Loop (18 or 20 gauge wire) |                 |                    |
|     3 | R1, R2, R3          | 100k 0603 0.1W 5%               | KOA             | RK73B1JTTD104J     |
|     1 | R4                  | 1 Ω 0603 0.1W 1%                | Yageo           | RC0603FR-071RL     |
|     1 | U1                  | USB Protection IC               | Maxim           | MAX20046GTCA/V+    |
|     1 | U2                  | 3.3V Linear Voltage Regulator   | Maxim           | MAX15007AASA+      |
|     1 | -                   | PCB: MAX20046 EVALUATION KIT#   | Maxim           | -                  |

│

Evaluates: MAX20046

## MAX20046 EV Kit Schematics

<!-- image -->

## MAX20046 EV Kit PCB Layouts

MAX20046 EV Kit Component Placement Guide-Top

<!-- image -->

│

## MAX20046 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20046 EV Kit PCB Layout-Layer 2

## MAX20046 EV Kit PCB Layouts (continued)

MAX20046 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX20046 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20046 EV Kit PCB Layout-Bottom

│

## MAX20046 EV Kit PCB Layouts (continued)

MAX20046 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX20046 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20046 EV Kit Component Placement Guide-Bottom Silkscreen

│

## MAX20046 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserYes the right to Fhange the FirFuitry and speFi¿Fations without notiFe at any time.

│

Evaluates: MAX20046
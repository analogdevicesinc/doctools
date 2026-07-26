<!-- lastmod 2022-08-03 -->
## General Description

The  MAX5389  evaluation  kit  (EV  kit)  is  an  assembled  and  tested  PCB  that  features  the  MAX5389M 50k I dual  digital  potentiometer.  The  EV  kit  provides  a mechanical  pushbutton-controlled  interface  or  a  usersupplied  digital  interface  for  the  IC  digital  inputs  for changing the potentiometer wipers.

The EV kit operates from an external 2.8V to 5.5V power supply  applied  at  the  VIN  and  GND  PCB  pads.  The MAX5389  operates  from  a  2.6V  to  5.5V  VDD  supply. Additional  LDO  regulators  are  provided  to  operate  the MAX5389 VDD input at 2.6V or 3.3V. The on-board regulators require a 200mV overhead above their respective outputs.

<!-- image -->

## MAX5389 Evaluation Kit

## Features

- S 2.8V to 5.5V Single-Supply Operation
- S 2.6V or 3.3V MAX5389 VDD input
- S Supports Pushbutton or Stand-Alone Digital Input Interfacing

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX5389EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1, C3, C5    |     3 | 10 F F Q 10%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106K TDK C2012X5R0J106K |
| C2, C4, C6    |     3 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K                         |
| C7            |     1 | 0.1 F F Q 10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K  |
| C8            |     0 | Not installed, ceramic capacitor (0603)                                                   |
| J1            |     1 | 2 x 8-pin header                                                                          |
| JU1           |     1 | 4-pin header                                                                              |
| JU2-JU11      |    10 | 2-pin headers                                                                             |
| R1-R6         |     6 | 100k I Q 5% resistors (0603)                                                              |

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| SW1-SW6       |     6 | Momentary pushbutton switches                                   |
| U1            |     1 | Dual 50k I potentiometer (14 TSSOP) Maxim MAX5389MAUD+          |
| U2            |     1 | 3.3V LDO regulator (5 SC70) Maxim MAX8511EXK33+ (Top Mark: AEI) |
| U3            |     1 | 2.6V LDO regulator (5 SC70) Maxim MAX8511EXK26+ (Top Mark: AEG) |
| U4            |     1 | Octal switch debouncer (20 SSOP) Maxim MAX6818EAP+              |
| -             |    11 | Shunts (JU1-JU11)                                               |
| -             |     1 | PCB: MAX5389 EVALUATION KIT+                                    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX5389 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5389 Evaluation Kit

## Quick Start

## Required Equipment

- MAX5389	EV	kit
- 5V,	100mA	power	supply
- Two	multimeters

## Table 1. Jumper Configuration (JU1-JU11)

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                                        |
|----------|------------------|------------------------------------------------------------------------|
| JU1      | 1-2              | VDD = 3.3V                                                             |
| JU1      | 1-3*             | VDD = 2.6V                                                             |
| JU1      | 1-4              | VDD = Voltage applied at the VIN PCB pad                               |
| JU1      | Not installed    | VDD not powered or VDD signal applied at header J1-1                   |
| JU2      | Installed        | CSA input pushbutton controlled                                        |
| JU2      | Not installed*   | CSA input logic-low or signal applied at header J1-3                   |
| JU3      | Installed*       | UDA input pushbutton controlled                                        |
| JU3      | Not installed    | UDA input connects to the VIN supply or power applied at header J1-5   |
| JU4      | Installed*       | INCA input pushbutton controlled                                       |
| JU4      | Not installed    | INCA input connects to the VIN supply or power applied at header J1-7  |
| JU5      | Installed        | CSB input pushbutton controlled                                        |
| JU5      | Not installed*   | CSB input logic-low or signal applied at header J1-9                   |
| JU6      | Installed*       | UDB input pushbutton controlled                                        |
| JU6      | Not installed    | UDB input connects to the VIN supply or power applied at header J1-11  |
| JU7      | Installed*       | INCB input pushbutton controlled                                       |
| JU7      | Not installed    | INCB input connects to the VIN supply or power applied at header J1-13 |
| JU8      | Installed*       | HA connected to the VDD voltage source                                 |
| JU8      | Not installed    | HA disconnected from the VDD voltage source                            |
|          | Installed*       | LA connected to GND                                                    |
| JU9      | Not installed    | LA disconnected from GND                                               |
| JU9      | Installed*       | HB connected to the VDD voltage source                                 |
| JU10     | Not installed    | HB disconnected from the VDD voltage source                            |
| JU11     | Installed*       | LB connected to GND                                                    |
| JU11     | Not installed    | LB disconnected from GND                                               |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Procedure

The  MAX5389  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1)  Verify that shunts are configured in the EV kit default state for proper startup operation (see Table 1).
- 2)  Apply a 5V power source across the VIN and GND PCB pads.
- 3)  Connect the multimeters to measure voltage across the WA and LA PCB pads and WB and LB PCB pads

<!-- image -->

## Detailed Description of Hardware

The MAX5389 EV kit is an assembled and tested PCB that  features  the  MAX5389M  50k I dual  digital  potentiometer.  Each  potentiometer  has  an  end-to-end  resistance of 50k I . Each 256-tap wiper position can be controlled independently using pushbutton switches. The EV kit uses a MAX5389M IC in a 14-pin TSSOP package on a proven two-layer PCB design.

The EV kit supports both mechanical and digital inputs to control the potentiometer wiper positions using jumpers  JU2-JU7.  Install  shunts  across  jumpers  JU2-JU7 to  control  the  MAX5389  logic  inputs  using  pushbutton switches SW1-SW6, respectively. See the Potentiometer A Control and Potentiometer B Control sections for additional information.

The  EV  kit  provides  connector  J1  to  interface  the MAX5389 CSA , CSB , INCA , INCB ,  UDA, and UDB signals directly to a user-supplied signal. Connector J1 also provides a connection to the MAX5389 VDD input.

## EV Kit Power Source

The EV kit operates from a 2.8V to 5.5V power supply applied at the VIN and GND PCB pads. VIN powers the MAX5389M (U1), two MAX8511 LDO regulators (U2, U3), and the MAX6818 debouncer switch (U4). Regulators U2 and U3 are used to set the MAX5389 VDD input to 3.3V or 2.6V, respectively.

Jumper JU1 selects the voltage applied at the MAX5389 VDD input. See Table 2 for proper jumper configuration for setting the MAX5389 VDD input.

Note  that  the  EV  kit  VIN  input  operates  down  to  2.6V. However,  a  minimum  2.7V,  2.8V,  and  3.5V  is  required when operating debouncer U4, LDO U3, and LDO U2, respectively.

Table 2. MAX5389 VDD Input (JU1)

| SHUNT POSITION   | MAX5389 VDD Voltage                             |
|------------------|-------------------------------------------------|
| 1-2              | 3.3V (LDO U2)                                   |
| 1-3              | 2.6V (LDO U3)                                   |
| 1-4              | Voltage applied at the VIN and GND PCB pads     |
| Not installed    | VDD not powered or power applied at header J1-1 |

<!-- image -->

## MAX5389 Evaluation Kit

## Digital Interface

Wiper WA  positioning can be controlled through momentary  pushbutton  switches  SW1  (POTA\_ CSA ), SW2 (POTA\_UDA), and SW3 (POTA\_ INCA ) by installing  shunts  across  jumpers  JU2,  JU3,  and  JU4, respectively.  Wiper  WB  positioning  can  be  controlled through  momentary  pushbutton  switches  SW4  (POTB\_ CSB ),  SW5  (POTB\_UDB),  and  SW6  (POTB\_ INCB )  by installing  shunts  across  jumpers  JU5,  JU6,  and  JU7 respectively. The debouncer (U4) eliminates the 'contact bounce' that SW1-SW6 can exhibit and is not required if using a digital interface.

The  EV  kit  also  provides  connector  J1  to  interface  the MAX5389 CSA , CSB , INCA , INCB , UDA, and UDB inputs directly  to  user-supplied  digital  signals.  See  Table  3 for  header  J1  pin  assignments.  Refer  to  the Up/Down Interface section  in  the  MAX5389  IC  data  sheet  for  a more detailed description.

## Potentiometer A Control

Jumpers JU2, JU3, and JU4 configure the EV kit operation for pushbutton control of the MAX5389 CSA ,  UDA, and INCA digital inputs, respectively.  Install  shunts across jumpers JU2, JU3, and JU4 for wiper WA positioning using pushbutton switches SW1, SW2, and SW3. SW1  sets  chip-select  input CSA low.  SW2  configures the  wiper  for  incrementing  or  decrementing  operation (UDA).  SW3  controls  the  wiper  position  ( INCA ).  The MAX5389 increments or decrements wiper WA position on a high-to-low transition at INCA .

Remove  the  shunts  at  JU2,  JU3,  and  JU4  to  position wiper WA using digital signals at header J1 (pins J1-3, J1-5, and J1-7). See Table 1 for proper JU2, JU3, and JU4 jumper configurations.

## Table 3. Header J1 Pin Assignments

| PIN                                                | SIGNAL   |
|----------------------------------------------------|----------|
| J1-1                                               | VDD      |
| J1-2, J1-4, J1-6, J1-8, J1-10, J1-12, J1-14, J1-16 | GND      |
| J1-3                                               | CSA      |
| J1-5                                               | UDA      |
| J1-7                                               | INCA     |
| J1-9                                               | CSB      |
| J1-11                                              | UDB      |
| J1-13                                              | INCB     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX5389 Evaluation Kit

## To increment wiper WA position:

- 1)  Press SW1 and hold ( CSA = low), or remove the shunt at jumper JU2.
- 2)  Press, then release SW3 ( INCA high-to-low transition).

## To decrement wiper WA position:

- 1)  Press SW1 and hold ( CSA = low), or remove the shunt at jumper JU2.
- 2)  Press SW2 and hold (UDA = low).
- 3)  Press, then release SW3 ( INCA high-to-low transition)

## Potentiometer B Control

Jumpers JU5, JU6, and JU7 configure the EV kit operation for pushbutton control of the MAX5389 CSB ,  UDB, and INCB digital inputs, respectively.  Install  shunts across jumpers JU5, JU6, and JU7 for wiper WB positioning using pushbutton switches SW4, SW5, and SW6. SW4  sets  chip-select  input CSB low.  SW5  configures the  wiper  for  incrementing  or  decrementing  operation (UDB). SW6 controls the wiper position. The MAX5389 increments  or  decrements  the  wiper  WB  position  on  a high-to-low transition at INCB .

Remove the shunts at JU5, JU6, and JU7 to position WB using digital signals at header J1 (pins J1-9, J1-11, and J1-13). See Table 1 for proper JU5, JU6, and JU7 jumper configurations.

## To increment wiper WB position:

- 2)  Press, then release SW6 ( INCB high-to-low transition).

## To decrement wiper WB position:

- 1)  Press SW4 and hold ( CSB = low), or remove the shunt at jumper JU5.
- 2)  Press SW5 and hold (UDA = low).
- 3)  Press, then release SW6 ( INCB high-to-low transition).

## Potentiometer, Voltage-Divider or Variable Resistor, with Ground Reference

The EV kit provides an option to configure the MAX5389 as a potentiometer or a voltage-divider open-ended or with  ground  reference,  respectively.  Use  jumpers  JU8 and  JU9  for  potentiometer  A  and  jumpers  JU10  and JU11 for potentiometer B configuration. Tables 4 and 5 list  the jumper options for configuring potentiometers A and B.

The  MAX5389  can  also  be  configured  as  a  variable resistor  by  shorting  the  H\_  and  W\_  pads using a wire. When operating as a variable resistor, any power source connected to the H\_, W\_, or L\_ pad must be voltage and current limited to the maximum conditions stated in the MAX5389 IC data sheet.

Note  that  to  test  the  device  in  resistor  mode,  the ohmmeter  must  be  GND  referenced  to  the  MAX5389. This can be accomplished by connecting the L\_ pad to GND or the H\_ pad to VDD. Resistance is then measured between the W\_ and L\_ or W\_ and H\_ PCB pads.

- 1)  Press SW4 and hold ( CSB = low), or remove the shunt at jumper JU5.

## Table 4. JU8 and JU9 Jumper Functions (Potentiometer A)

| SHUNT POSITION   | SHUNT POSITION   | HA PAD           | LA PAD           | MAX5389 FUNCTION                   |
|------------------|------------------|------------------|------------------|------------------------------------|
| JU8              | JU9              | HA PAD           | LA PAD           | MAX5389 FUNCTION                   |
| Not installed*   | Not installed    | Not connected    | Not connected    | Potentiometer open-ended           |
| Not installed*   | Installed*       | Not connected    | Connected to GND | Potentiometer with GND reference   |
| Installed        | Not installed    | Connected to VDD | Not connected    | Voltage-divider open-ended         |
| Installed        | Installed        | Connected to VDD | Connected to GND | Voltage-divider with GND reference |

* Default position.

## Table 5. JU10 and JU11 Jumper Functions (Potentiometer B)

| SHUNT POSITION   | SHUNT POSITION   |                  | LB PAD           | MAX5389 FUNCTION                   |
|------------------|------------------|------------------|------------------|------------------------------------|
| JU10             | JU11             |                  | LB PAD           | MAX5389 FUNCTION                   |
| Not installed*   | Not installed    | Not connected    | Not connected    | Potentiometer open-ended           |
| Not installed*   | Installed*       | Not connected    | Connected to GND | Potentiometer with GND reference   |
| Installed        | Not installed    | Connected to VDD | Not connected    | Voltage-divider open-ended         |
| Installed        | Installed        | Connected to VDD | Connected to GND | Voltage-divider with GND reference |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5389 Evaluation Kit

Figure 1. MAX5389 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## Evaluates:  MAX5389

## MAX5389 Evaluation Kit

<!-- image -->

Figure 2. MAX5389 EV Kit Component Placement GuideComponent Side

Figure 3. MAX5389 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5389 EV Kit PCB Layout-Solder Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5389 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.
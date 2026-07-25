<!-- lastmod 2022-08-04 -->
<!-- image -->

Evaluates: MAX14919

## General Description

The MAX14919 evaluation kit (EV kit) provides a proven design to evaluate the MAX14919 industrial-grade quad low-side  switch  with  140mΩ  (typ)  R ON and  ±1kV/42Ω surge protection.

The  MAX14919  EV  kit  features  an  isolated  power  and signal interface to provide pin-level control of the four lowside switches in the MAX14919. The EV kit also features reverse-current protection to prevent damage caused by miswiring faults at output and return terminals.

The EV kit comes with the MAX14919AUP+ (20 TSSOPEP, 6.5mm x 6.4mm footprint) device installed.

<!-- image -->

## Block Diagram

<!-- image -->

## MAX14919 Evaluation Kit

## Features

- Robust Operation with a Wide Range of Input Voltages and Load Conditions
- Surge Protection with Up To ±1kV IEC61000-4-5 at Optional Field Supply Input and Output to Ground
- LED Indication of Fault and Reverse-Current Detect Conditions
- Multiple Fault-Condition Indications
- Reverse-Current Detection
- Undervoltage Lockout on V5 Output
- Short Detection on RCLIM Control Input
- Thermal Shutdown Fault
- Includes a FET for Output Reverse-Current Protection
- Inrush Current Control to Allow up to 2x the Maximum Load Current
- Resistor-Selectable Options to Set Maximum Allowable Load Current
- +1.8V to +5.5V Wide Logic-Voltage Range
- +3V to +5.5V Isolated Supply Input Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX14919 Evaluation Kit

## Quick Start

## Required Equipment

- MAX14919 EV kit
- +5.5V DC power supply
- 1.8V-5.5V DC power supply
- +24V DC power supply
- Signal generator
- Resistive load (10kΩ)
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

Refer to Table 1 : Jumper Positions and Configurations Refer to Table 2 : Terminal Description

- 1) Verify that all jumpers are in default positions ( Table 1).
- 2) Connect the EV kit V IN terminal Pin 1 and Pin 2 to the 5V output of external DC power. Connect the positive output of the power supply at Pin 1 and the negative/ return terminal at Pin 2. Do not turn on the power supply.
- 3) Connect the EV kit Terminal 1, Pin1 to the positive terminal of a +1.8V external DC power supply. Con -nect the negative/return terminal of the power supply to Terminal 1, Pin 10. Do not turn on the power supply.

Evaluates: MAX14919

positive terminal of the +24V power supply to one end of the 10kΩ resistive load. Connect the other end of the resistive load to OUT1 or Terminal 2, Pin 2 on  the field side.

- 5) Connect  the  negative/return  terminal  of  the  +24V power supply to Terminal 2, Pin 8 of the EV kit.
- 6) Connect the positive output of the signal generator to ISO\_IN1 or Terminal 1, Pin 5 of the logic side, and the return  output  of  the  signal  generator  wire  to  GNDB (Terminal 1, Pin 9 and Pin 10).
- 7) With  the  output  disabled,  set  the  signal  generator output at 1kHz square wave with V HIGH of 1.8V and V LOW of 0V.
- 8) Connect a scope probe at OUT1 with respect to the COM signal.
- 9) Turn on the +5V and +1.8V power supplies and verify that the green LEDs D3 and D6 are illuminated, indicating the V DD  and V L supply  inputs  to  MAX14919 are present. Turn on/enable the +24V power supply.
- 10)  Turn on/enable the  signal generator output, which is connected to ISO\_IN1.
- 11) Using  the  scope,  verify  that  the  MAX14919  OUT1 switch is turned ON and is switching at 1kHz rate.
- 12)  Disable the signal generator output and repeat steps 9 through 11 by connecting the control power supply to ISO\_IN2 to ISO\_IN4 to evaluate each channel.
- 4) With the power supply output disabled, connect the
- 13)  Disable the signal generator and all power supplies, in that order, after evaluation.

## Table 1. MAX14919 EV Kit Shunt Positions and Settings

| HEADER   | SHUNT POSITION   | FUNCTION DESCRIPTION                                                                                                                                                                                                                                                                       |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J_VDDB   | Not Installed*   | Separate power supply inputs must be provided at V DDB input at Terminal 1, Pin 1 and V IN terminal. This is useful when V DDB and ISO_INx signals are lower than +3V, to allow a standard +1.8V interface signals from a microcontroller to be directly connected to the MAX14919 EV kit. |
| J_VDDB   | 1-2              | Installing this jumper connects the V DDB supply to V IN . With shunt installed, the EV kit can be powered from one common supply either at V IN or Terminal 1, Pin 1. This supply must be between 3V and 5.5V.                                                                            |
| J1       | Not Installed*   | The VDD supply input of MAX14919 is not connected.                                                                                                                                                                                                                                         |
| J1       | 1-2              | Connects the VDD supply input of MAX14919 to the unregulated isolated power supply output.                                                                                                                                                                                                 |
| J1       | 2-3              | Connects the VDD supply input of MAX14919 to the field power supply connection from Terminal 2, Pin 1.                                                                                                                                                                                     |

│

Table 1. MAX14919 EV Kit Shunt Positions and Settings (continued)

| HEADER   | SHUNT POSITION   | FUNCTION DESCRIPTION                                                                                                                                                                                                                                                   |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2       | 1-2*             | Connects the V 5 regulator supply output to the V L input of MAX14919 (logic supply input). The power supply rail V LOGIC powers Side A of the MAX14483 digital isolator and 74HC08AND gate.                                                                           |
| J2       | Not Installed    | V 5 regulator output/logic supply is not connected to the logic supply input V L of MAX14919. An external source must be supplied though the V LOGIC test point and GND. This option may be used to evaluate with different logic supply voltages from +1.8V to +5.5V. |
| J3       | 1-2*             | Connects the FAULT logic output to the pullup resistor and red fault indication LED D5.                                                                                                                                                                                |
| J3       | Not Installed    | Disconnects the pullup resistor. The FAULT indication function is not in use.                                                                                                                                                                                          |
| J4       | 1-2*             | Connects the REV (reverse-current detection) logic output to the pullup resistor and red fault indication LED D7.                                                                                                                                                      |
| J4       | Not Installed    | Disconnects the pullup resistor. The REV indication function is not in use.                                                                                                                                                                                            |
| J5       | 1-2*             | Enables INRUSH mode, allowing up to 2x the maximum current limit for up to 10ms.                                                                                                                                                                                       |
| J5       | 2-3              | Disables INRUSH mode.                                                                                                                                                                                                                                                  |
| J6       | 1-2*             | Sets current limit for all channels to 600mA.                                                                                                                                                                                                                          |
| J6       | Not Installed    | Disconnects resistor R7.                                                                                                                                                                                                                                               |
| J7       | 1-2              | Sets current limit for all channels to 300mA.                                                                                                                                                                                                                          |
| J7       | Not Installed*   | Disconnects resistor R3.                                                                                                                                                                                                                                               |
| J8       | 1-2              | Sets current limit for all channels to 100mA.                                                                                                                                                                                                                          |
| J8       | Not Installed*   | Disconnects resistor R2.                                                                                                                                                                                                                                               |
| J9       | Not Installed*   | Default condition using the isolated interface at Terminal 1. The output of the logicalAND gate is connected to the IN1 input of MAX14919. The signal controlling the IN1 switch is from ISO_IN1. See Table 3.                                                         |
| J9       | 1-2              | If MAX14919 is evaluated without the isolated interface, resistor R8 must be removed and OUT1 is controlled by applying a signal to test point IN1. Installing a shunt across 1-2 pulls the IN1 input high. See the Evaluating Only MAX14919 Device section.           |
| J10      | Not Installed*   | Default condition using the isolated interface at Terminal 1. The output of the logicalAND gate is connected to the IN2 input of MAX14919. The signal controlling the IN2 switch is from ISO_IN2. See Table 3.                                                         |
| J10      | 1-2              | If MAX14919 is evaluated without the isolated interface, resistor R11 is removed and OUT2 is controlled by applying a signal to test point IN2. Installing a shunt across 1-2 pulls the IN2 input high. See the Evaluating Only MAX14919 Device section.               |
| J11      | Not Installed*   | Default condition using the isolated interface at Terminal 1. The output of the logicalAND gate is connected to the IN3 input of MAX14919. The signal controlling the IN3 switch is from ISO_IN3. See Table 3.                                                         |
| J11      | 1-2              | If MAX14919 is evaluated without the isolated interface, resistor R13 is removed and OUT3 is controlled by applying a signal to the test point IN3. Installing a shunt across 1-2 pulls the IN3 input high. See the Evaluating Only MAX14919 Device section.           |
| J12      | Not Installed*   | Default condition using the isolated interface at Terminal 1. The output of the logicalAND gate is connected to the IN4 input of MAX14919. The signal controlling the IN4 switch is from ISO_IN4. See Table 3.                                                         |
| J12      | 1-2              | If MAX14919 is evaluated without the isolated interface, resistor R12 is removed and OUT4 is controlled by applying a signal to the test point IN4. Installing a shunt across 1-2 pulls the IN4 input high. See the Evaluating Only MAX14919 Device section.           |

*Default position.

## MAX14919 Evaluation Kit

Table 2. MAX14919 EV Kit Terminal Description

| TERMINAL   | POSITION   | NAME                      | FUNCTION DESCRIPTION                                                                                                                                                                                                                              |
|------------|------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VIN        | 1          | Isolated power input      | Positive supply input for isolated power, +3V to +5V                                                                                                                                                                                              |
| VIN        | 2          | Isolated power GND/return | Negative/return of the supply for isolated power.                                                                                                                                                                                                 |
| TERMINAL 1 | 1          | V DDB                     | V DDB : The V DDB supply input connected to MAX14483 for signal isolation.                                                                                                                                                                        |
| TERMINAL 1 | 2          | FIELD_ PWR_OK             | FIELD_PWR_OK: Output from Digital Isolator. Default high, indicating power good signal from the field side. When the field side is not present, the signal goes low, indicating a fault. This signal is driven from MAX14919 from the field side. |
| TERMINAL 1 | 3          | ISO_FAULT                 | ISO_FAULT: Isolated fault-detect logic-side output for user control/monitor. Signal driven from the field side in the presence of a fault condition. (Jumper J3 is installed) See Table 3.                                                        |
| TERMINAL 1 | 4          | ISO_REV                   | ISO_REV: isolated reverse-current-detect logic output for user control/monitor. Signal driven from the field side in the presence of a reverse-load connection. (Jumper J4 is installed). See Table 3.                                            |
| TERMINAL 1 | 5          | ISO_IN1                   | ISO_IN1: Input to digital isolator. Input logic side to control MAX14919 IN1 switch input (field side). See Table 3.                                                                                                                              |
| TERMINAL 1 | 6          | ISO_IN2                   | ISO_IN2: Input to digital isolator. Input logic side to control MAX14919 IN2 switch input (field side).                                                                                                                                           |
| TERMINAL 1 | 7          | ISO_IN3                   | ISO_IN3: Input to digital isolator. Input logic side to control MAX14919 IN3 switch input (field side) .                                                                                                                                          |
| TERMINAL 1 | 8          | ISO_IN4                   | ISO_IN4: Input to digital isolator. Input logic side to control MAX14919 IN4 switch input (field side).                                                                                                                                           |
| TERMINAL 1 | 9, 10      | GNDB                      | Ground/return signals for V DDB supply                                                                                                                                                                                                            |
| TERMINAL 2 | 1          | +24V_FIELD_ SUPPLY_       | FIELD_SUPPLY_INPUT: when MAX14919 chosen to power from field supply input, J1 jumper is installed across 2-3 to connect this input to VDD of MAX14919.                                                                                            |
| TERMINAL 2 | 2          | OUT1                      | OUT1: Output of low-side switch channel 1. This terminal is connected to the load.                                                                                                                                                                |
| TERMINAL 2 | 3          | OUT2                      | OUT2: Output of low-side switch channel 2. This terminal is connected to the load.                                                                                                                                                                |
| TERMINAL 2 | 4          | OUT3                      | OUT3: Output of low-side switch channel 3. This terminal is connected to the load.                                                                                                                                                                |
| TERMINAL 2 | 5          | OUT4                      | OUT4: Output of low-side switch channel 4. This terminal is connected to the load.                                                                                                                                                                |
| TERMINAL 2 | 6, 7, 8    | COM                       | Load return signal. This signal must be lower than load potential                                                                                                                                                                                 |

│

## Detailed Description of Hardware

The MAX14919 EV kit provides an easy-to-use and flex -ible solution for evaluating the MAX14919, quad low-side switch for industrial applications. The EV kit comes with a field-side terminal to enable the connection of loads  to evaluate the device and the system.

The  MAX14919  EV  kit  comes  with  a  FET  installed  to protect against reverse current at load outputs with surge protection  of  up  to  ±1.2kV/42Ω  surge  protection  at  load output to ground and at the optional field supply input.

## Isolated Analog and Logic Supply

Terminal VIN allows a +3V to +5V supply input to power MAX14919 using a MAX258 transformer driver and transformer  T1  to  provide  isolated  power.  The  output  of  the MAX258 transformer driver is an unregulated supply that feeds supply input to V DD of MAX14919 through Jumper J1. If MAX14919 is powered from the isolated side (V IN ), install  Jumper  J1  across  1-2.  If  MAX14919  is  powered from the field supply (+24V field supply), install jumper J1 across 2-3.

Install jumper J\_VDDB when interfacing to systems with +3.3V or 5V levels. Installing  jumper  J\_VDDB connects V IN to  V DDB ,  power  supply  input  to  U2  (MAX14483). Alternatively, if the user wishes to interface with a +1.8V system, leave jumper shunt at J\_VDDB uninstalled and use  a  separate  supply  input  at  V IN from  +3V  to  +5V. Power the V DDB supply input of U2 with +1.8V.

## MAX14919 Switch Control

MAX14919  switch  inputs  IN1  to  IN4  are  controlled through  the  switch  controller  inputs  Terminal  (1)  input Pin  5  to  Pin  8.  These  signals  are  isolated  using  the MAX14483  device  before  feeding  into  the  MAX14919. Each MAX14919 low-side switch input may be controlled using  the  individual  control  pin  ISO\_IN1  to  ISO\_IN4. Table 3 shows the truth table or switch output states.

## Power Good Signal

When both the logic side (Side B) and isolated field side (Side A)  are powered, and the system is in normal opera -tion,  FIELD\_PWR\_OK signal is high. If the logic side is powered with no power applied to the V DD supply input of MAX14919, the FIELD\_PWR\_OK signal goes low, indi -cating no power is applied to MAX14919. The function is enabled by MAX14483 which monitors the power level of both sides (SAA, SBA), indicating a logic-low level signal for no power present or logic-high for power present.

## Connecting the Load to MAX14919 Switch Outputs

Terminal 2, Pin 2 through Pin 5 (field side) are the switch outputs  (OUT1-OUT4)  for  connecting  the  appropriate loads. The COM inputs in Terminal 2, Pin 6 through Pin 8 are the power return from the loads to MAX14919 EV kit.

## No Power Applied on Logic Side

If  the  logic  side  (B  side)  loses  power  or  if  power  is not  applied  to  the  V DDB   of  the  MAX14483  isolator when  MAX14919  is  powered,  the  SBA  logic  output  of MAX14483 goes low, pulling the outputs of all the quad two-input  AND  gates  low.  This  pulls  all  four  inputs  of MAX14919 low, making sure the switch outputs are OFF. Regardless  of  the  levels  present  in  subsequent  input IN[1:4],  the  outputs  are  pulled  low  to  ensure  a  fail-safe mechanism of maintaining a link with the logic side and preventing unwanted triggering of switch outputs. When VDDA and VDDB power inputs of  MAX14483  are  available, inputs at Terminal 1 Pin 5 through Pin 8 (ISO\_IN1 to ISO\_IN4) are driven to IN1 through IN4 of MAX14919.

## Evaluating Only the MAX14919 Device

If the MAX14919 device is to be evaluated without the iso -lated power and signal devices, removing the 0Ω shunts R8, R11, R12, and R13 after the logical AND gates (U4) ensures the isolator is disconnected from the MAX14919 device.  Switch-control  inputs  IN[1:4]  can  be  used  to  set individual channel logic high by installing jumper shunts J9 to J12 to turn the switch on. MAX14919 device inputs IN1 through IN4 have weak internal pulldowns, and removing the  jumper  shunts  J9  through  J12  pulls  the  correspond -ing individual switch input IN[1:4] low to turn the intended channel off.

## Table 3. MAX14922 Switch Control Truth Table

| TERMINAL 1 CONTROL INPUT   |   LOGIC LEVEL | ASSOCIATED MAX14919 INPUT   | OUTPUT STATUS   |
|----------------------------|---------------|-----------------------------|-----------------|
| ISO_IN1                    |             0 | IN1                         | OFF             |
| ISO_IN1                    |             1 | IN1                         | ON              |
| ISO_IN2                    |             0 | IN2                         | OFF             |
| ISO_IN2                    |             1 | IN2                         | ON              |
| ISO_IN3                    |             0 | IN3                         | OFF             |
| ISO_IN3                    |             1 | IN3                         | ON              |
| ISO_IN4                    |             0 | IN4                         | OFF             |
| ISO_IN4                    |             1 | IN4                         | ON              |

## MAX14919 Evaluation Kit

## Using External Field Supply to Power MAX14919

If the load and the MAX14919 share the same field sup -ply, MAX14919 is powered from the field supply and not through isolated power. Using power input at Terminal 2, Pin  1  as  the  supply  input  and  installing  a  shunt  across positions 2-3 on Jumper 1 selects the field supply input.

## Diagnostic Features

The  MAX14919  EV  kit  features  on-board  diagnostics to monitor faults. Jumpers J3 and J4 allow the user the option to view the diagnostic outputs through red status LEDs. Alternatively, test points are provided for each diag -nostic output for probe (measurement). When the status LEDs are not required, removing the jumper disables the LEDs from the diagnostic output.

Evaluates: MAX14919

## Current Limit Setting

Selecting among jumpers J6, J7, and J8 sets the maxi -mum allowable current through each switch output. Load current  limit  setting  can  be  done  from  a  minimum  of 100mA  to  a  maximum  of  600mA.  Jumper  J6  selects  a 25kΩ resistor, setting 600mA as the current limit. Jumper J7 selects a 49.9kΩ resistor, setting 300mA as the current limit. Jumper 8 selects a 124kΩ resistor setting 120mA as the current limit.

## Selectable Inrush mode

Installing a shunt across 1-2 on Jumper J5 pulls the inrush input high, enabling inrush mode on all channels. During inrush mode, each of the switches can handle twice the set limiting current for up to 10ms. Installing a shunt across 2-3 pulls inrush input low, disabling the feature.

Table 4 shows the features of the diagnostic outputs.

## Table 4. MAX14922 EV kit Diagnostic Output Features

| DIAGNOSTIC FEATURE     | JUMPER   | TEST POINT   | FUNCTION DESCRIPTION                                                                                                                                                                                                                                                 |
|------------------------|----------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Fault                  | J3       | FAULT        | Active-low fault. Fault is asserted low under any of the following conditions: • Any of the switch outputs is in thermal overload • Overtemperature shutdown • Short detected on RCLIM input • UVLO on V 5 (undervoltage lockout) • Reverse current detected at load |
| Reverse Current Detect | J4       | REV          | Active-Low Output. REV status output goes low when reverse load current is detected. During this condition, the REV output forces the NMOS to turn off to disconnect the miswired loop, thereby protecting the switch.                                               |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14919EVKIT# | EV Kit |

#Denotes an RoHS-compliant part.

│

## MAX14919 Evaluation Kit

## MAX14919 EV Kit Bill of Materials

|   ITEM | REF_DES                        | DNI/DNP   |   QTY | MFG PART #                                                            | MANUFACTURER                                 | VALUE               | DESCRIPTION                                                                                                            |
|--------|--------------------------------|-----------|-------|-----------------------------------------------------------------------|----------------------------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------|
|      1 | C1                             | -         |     1 | GRM21BR71C105KA01; GCM219R71C105KA37                                  | MURATA;MURATA                                | 1UF                 | CAP; SMT (0805); 1UF; 10%; 16V; X7R; CERAMIC                                                                           |
|      2 | C2                             | -         |     1 | CL21B106KOQNNN; GRM21BZ71C106KE15; GMC21X7R106K16NT                   | SAMSUNG; MURATA;CAL-CHIP                     | 10UF                | CAP; SMT (0805); 10UF; 10%; 16V; X7R; CERAMIC                                                                          |
|      3 | C3, C6, C10, C16               | -         |     4 | ECP-U1C104MA5                                                         | PANASONIC                                    | 0.1UF               | CAP; SMT (0805); 0.1UF; 20%; 16V; FILM CAPACITOR                                                                       |
|      4 | C4, C5, C15                    | -         |     3 | GRM21BR72E103KW03; C0805C103KARAC; C2012X7R2E103K125AA                | MURATA; KEMET;TDK                            | 0.01UF              | CAP; SMT (0805); 0.01UF; 10%; 250V; X7R; CERAMIC                                                                       |
|      5 | C7, CIN                        | -         |     2 | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG | MURATA; SAMSUNG ELECTRONICS; TDK;TAIYO YUDEN | 1UF                 | CAP; SMT (0805); 1UF; 10%; 50V; X7R; CERAMIC                                                                           |
|      6 | C8                             | -         |     1 | C2012X7S2A105K125AB; GRJ21BC72A105KE11; GRM21BC72A105KE01             | TDK;MURATA; MURATA                           | 1UF                 | CAP; SMT (0805); 1UF; 10%; 100V; X7S; CERAMIC                                                                          |
|      7 | C9                             | -         |     1 | C0805C103F1GAC                                                        | KEMET                                        | 0.01UF              | CAP; SMT (0805); 0.01UF; 1%; 100V; C0G; CERAMIC                                                                        |
|      8 | D1, D2                         | -         |     2 | MBRS230LT3G                                                           | ON SEMICONDUCTOR                             | MBRS230LT3G         | DIODE; SCH; SMB (DO-214AA); PIV=30V; IF=2A                                                                             |
|      9 | D3, D6                         | -         |     2 | APT1608CGCK                                                           | KINGBRIGHT                                   | APT1608CGCK         | DIODE; LED; STANDARD; GREEN; SMT (0603); PIV=2.1V; IF=0.02A; -40 DEGC TO +85 DEGC                                      |
|     10 | D4                             | -         |     1 | SMCJ36A                                                               | LITTEL FUSE                                  | 36V                 | DIODE; TVS; SMC (DO-214AB); VRM=36V; IPP=25.9A                                                                         |
|     11 | D5, D7                         | -         |     2 | APT1608LSECK/J3-PRV                                                   | KINGBRIGHT                                   | APT1608LSECK/J3-PRV | DIODE; LED; HYPER RED WATER CLEAR; RED; SMT (0603); VF=1.8V; IF=0.002A                                                 |
|     12 | D8                             | -         |     1 | MBRA210LT3G                                                           | ON SEMICONDUCTOR                             | MBRA210LT3G         | DIODE; SCH; SMA (DO-214AC); PIV=10V; IF=2A                                                                             |
|     13 | D9                             | -         |     1 | BAS16HT3G                                                             | ON SEMICONDUCTOR                             | BAS16HT3G           | DIODE; SWT; SOD-323; PIV=200V; IF=0.2A                                                                                 |
|     14 | D10                            | -         |     1 | SMAJ33CA                                                              | VISHAY GENERAL SEMICONDUCTOR                 | 33V                 | DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A                                                                          |
|     15 | FAULT, IN1-IN4, OUT1-OUT4, REV | -         |    10 | 5007                                                                  | KEYSTONE                                     | N/A                 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     16 | GND3, GND4, GND6, GNDB         | -         |     4 | 5006                                                                  | KEYSTONE                                     | N/A                 | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     17 | J1, J5                         | -         |     2 | PCC03SAAN                                                             | SULLINS                                      | PCC03SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                               |
|     18 | J2-J4, J6-J12, J_VDDB          | -         |    11 | PCC02SAAN                                                             | SULLINS                                      | PCC02SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                               |
|     19 | MH1-MH4                        | -         |     4 | 9032                                                                  | KEYSTONE                                     | 9032                | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                              |
|     20 | Q1                             | -         |     1 | NTTFS5820NLTAG                                                        | ON SEMICONDUCTOR                             | NTTFS5820NLTAG      | TRAN; POWER MOSFET; NCH; WDFN8; PD-(33W); I-(37A); V-(60V)                                                             |
|     21 | R1                             | -         |     1 | CRCW06035K60FK                                                        | VISHAY DALE                                  | 5.6K                | RES; SMT (0603); 5.6K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |
|     22 | R2                             | -         |     1 | CRCW0603124KFK                                                        | VISHAY DALE                                  | 124K                | RES; SMT (0603); 124K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |
|     23 | R3                             | -         |     1 | CRCW060349K9FK; ERJ-3EKF4992                                          | VISHAY DALE;PANASONIC                        | 49.9K               | RES; SMT (0603); 49.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |

Evaluates: MAX14919

## MAX14919 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                      | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                         | VALUE          | DESCRIPTION                                                                                                                       |
|--------|------------------------------|-----------|-------|------------------------------------------------------------------------------------|--------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------|
| 24     | R4, R8, R11-R13              | -         |     5 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                     | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH | 0              | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                           |
| 25     | R5, R6, R9, R10              | -         |     4 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE; PANASONIC;YAGEO         | 10K            | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                 |
| 26     | R7                           | -         |     1 | PNM0603E2502BS                                                                     | VISHAY DALE                          | 25K            | RES; SMT (0603); 25K; 0.10%; +/-25PPM/DEGC; 0.1500W                                                                               |
| 27     | R14, RP4                     | -         |     2 | RCW06033K30FK; RC0603FR-073K3L; RK73H1J3301F                                       | VISHAY;YAGEO;VISHAY                  | 3.3K           | RES; SMT (0603); 3.3K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                |
| 28     | R15-R18                      | -         |     4 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO;YAGEO; PANASONIC  | 100K           | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                |
| 29     | RP2, RP5                     | -         |     2 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK                    | ROHM;PANASONIC; BOURNS;VISHAY DALE   | 20K            | RES; SMT (0603); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                 |
| 30     | SU2, SU4, SU5, SU7-SU9, SU12 | -         |     7 | NPC02SXON-RC                                                                       | SULLINS ELECTRONICS CORP.            | NPC02SXON-RC   | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                      |
| 31     | T1                           | -         |     1 | 750316769                                                                          | WURTH ELECTRONICS INC                | 750316769      | TRANSFORMER; SMT; 3.45:1 ;                                                                                                        |
| 32     | TERMINAL1                    | -         |     1 | TSW-110-07-G-S                                                                     | SAMTEC                               | TSW-110-07-G-S | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQ POST HEADER; STRAIGHT; 10PINS                                                          |
| 33     | TERMINAL2                    | -         |     1 | OSTVN08A150                                                                        | ON-SHORE TECHNOLOGY INC.             | OSTVN08A150    | CONNECTOR; FEMALE; THROUGH HOLE; SCREW TYPE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 8PINS                                             |
| 34     | U1                           | -         |     1 | MAX14919                                                                           | MAXIM                                | MAX14919       | EVKIT PART - IC; MAX14919; PACKAGE OUTLINE DRAWING: 21-100132; PACKAGE LAND PATTERN: 90-100049; PACKAGE CODE: U20E+3C; TSSOP20-EP |
| 35     | U2                           | -         |     1 | MAX14483AAP+                                                                       | MAXIM                                | MAX14483AAP+   | IC; DISO; 6-CHANNEL; LOW-POWER; 3.75KVRMS SPI DIGITAL ISOLATOR; SSOP20                                                            |
| 36     | U3                           | -         |     1 | MAX258ATA+                                                                         | MAXIM                                | MAX258ATA+     | IC; DRV; 0.5A; PUSH-PULL TRANSFORMER DRIVER FOR ISOLATED POWER SUPPLY; TDFN8-EP 2X3                                               |
| 37     | U4                           | -         |     1 | 74HC08D                                                                            | NXP                                  | 74HC08D        | IC; AND; QUAD 2-INPUT AND GATE; NSOIC14                                                                                           |
| 38     | VDD, VDDB, VIN1, VLOGIC1     | -         |     4 | 5005                                                                               | KEYSTONE                             | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;              |
| 39     | VIN                          | -         |     1 | 1729018                                                                            | PHOENIX CONTACT                      | 1729018        | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                         |
| 40     | PCB                          | -         |     1 | MAX14919                                                                           | MAXIM                                | PCB            | PCB:MAX14919                                                                                                                      |
| TOTAL  |                              |           |    96 |                                                                                    |                                      |                |                                                                                                                                   |

## MAX14919 EV Kit Schematic Diagram

<!-- image -->

## MAX14919 EV Kit Schematic Diagram (continued)

<!-- image -->

## MAX14919 EV Kit PCB Layout Diagrams

MAX14919 EV Kit PCB Layout - Top Silkscreen

<!-- image -->

MAX14919 EV Kit PCB Layout - Top View

<!-- image -->

│

## MAX14919 EV Kit PCB Layout Diagrams (continued)

MAX14919 EV Kit PCB Layout - Bottom View

<!-- image -->

MAX14919 EV Kit PCB Layout - Silkscreen Bottom

<!-- image -->

│

## MAX14919 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/20            | Initial release                                                                                                                                                                             | -               |
|                 0 | 6/21            | Updated General Description , Features , Detailed Description of Hardware , MAX14919 EV Kit Bill of Materials , MAX14919 EV Kit Schematic Diagram , and MAX14919 EV Kit PCB Layout Diagrams | 1, 5, 7-11      |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX14919
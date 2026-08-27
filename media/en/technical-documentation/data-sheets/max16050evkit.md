<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16050 Evaluation Kit

## General Description

The MAX16050 evaluation kit (EV kit) is a complete, fully assembled and tested multivoltage sequencer circuit that demonstrates the capability of the 4-channel MAX16050 and  5-channel  MAX16051  sequencing  ICs.  The MAX16050 EV kit monitors up to nine DC-DC converter outputs and ensures proper power-up and power-down conditions for systems requiring voltage sequencing.

The EV kit features RESET output signals to indicate an undervoltage condition, or when SHDN or FAULT signals are pulled low. Additionally, dedicated OV\_OUT outputs indicate an overvoltage fault when any of the EV kit's inputs go above the overvoltage threshold. The EV kit is capable of evaluating the MAX16050 and MAX16051 individually. The EV kit can be configured for  daisy  chaining  these  two  devices  together,  which enables the user to sequence and monitor up to nine voltages across both devices. The MAX16050 EV kit also provides PCB pads for low-current MOSFETs that are controlled using the MAX16050 and MAX16051 charge-pump outputs.

The MAX16050 EV kit utilizes two power supplies, one for each IC. Each power supply can range from 2.7V to 13.2V, allowing the user to operate directly from an intermediate bus voltage. The MAX16050 EV kit also requires an additional 2.2V to 5.5V power supply for the pullup resistors' open-drain logic outputs.

| DESIGNATION         |   QTY | DESCRIPTION                                                          |
|---------------------|-------|----------------------------------------------------------------------|
| C1, C2, C12         |     0 | Not installed, ceramic capacitors (1206)                             |
| C3, C13             |     0 | Not installed, ceramic capacitors (0805)                             |
| C4, C15             |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E104K  |
| C5, C14             |     2 | 1µF ±10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E105K    |
| C6-C9, C16-C19, C22 |     9 | 0.01µF ±10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E103K |
| C10, C20            |     2 | 1200pF ±5%, 50V C0G ceramic capacitors (0805) Murata GRM2195C1H122J  |

Features

- ♦ Quick Demo Mode Evaluation Without DC-DC Converters
- ♦ Monitors and Sequences Up to Nine DC-DC Converter Outputs
- ♦ Reverse-Sequencing Operation
- ♦ Configurable Sequencing Order (MAX16050 Only)
- ♦ Daisy-Chaining Operation of the MAX16050 and MAX16051
- ♦ Overvoltage and Power-Good Monitoring
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16050EVKIT+ | EV Kit |

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                         |
|---------------------------------|-------|---------------------------------------------------------------------|
| C11, C21                        |     2 | 2200pF ±5%, 50V C0G ceramic capacitors (0805) Murata GRM2165C1H222J |
| GND (3)                         |     3 | PC large black test points                                          |
| GND (2)                         |     2 | PC mini black test points                                           |
| J1                              |     1 | 2 x 16 header                                                       |
| J2                              |     1 | 2 x 20 header                                                       |
| J3-J6                           |     4 | 2-pin headers                                                       |
| JU1-JU7, JU10, JU11, JU12, JU15 |    11 | 3-pin headers                                                       |
| JU8, JU9, JU13, JU14            |     4 | 2-pin headers                                                       |
| N1, N2                          |     0 | Not installed, n-channel MOSFETs (3 SOT23)                          |

1

## MAX16050 Evaluation Kit

## Component List (continued)

| DESIGNATION                                                                                                           |   QTY | DESCRIPTION                           |
|-----------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------|
| OUTPUT1, OUTPUT2, U1_CP_OUT, U1_EN, U1_ OV_OUT , U1_REM, U1_ RESET , U2_CP_OUT, U2_EN, U2_ OV_OUT , U2_REM, U2_ RESET |    12 | PC mini red test points               |
| R1, R12, R20, R32                                                                                                     |     4 | 86.6k Ω ±1% resistors (0805)          |
| R2, R4, R10, R13, R22, R24, R30, R33, R36                                                                             |     9 | 16.5k Ω ±1% resistors (0805)          |
| R3, R23                                                                                                               |     2 | 30.1k Ω ±1% resistors (0805)          |
| R5, R11, R14, R25, R31, R34, R37                                                                                      |     7 | 10k Ω ±1% resistors (0805)            |
| R6, R26                                                                                                               |     2 | 634k Ω ±1% resistors (0805)           |
| R7, R27                                                                                                               |     2 | 261k Ω ±1% resistors (0805)           |
| R8, R28                                                                                                               |     2 | 698k Ω ±1% resistors (0805)           |
| R9, R29                                                                                                               |     2 | 61.9k Ω ±1% resistors (0805)          |
| R15, R21                                                                                                              |     0 | Not installed, resistors-short (0805) |
| R16-R19, R38-R41                                                                                                      |     8 | 10k Ω ±5% resistor (0805)             |

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX16050 EV kit
- DC power supplies: 3.5V/100mA, 5V/50mA
- 2-channel oscilloscope

## Procedure

The MAX16050 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1) Verify  that  headers  J1  and  J2  and  jumpers JU1-JU14 are configured for demo mode configuration (see Table 1).
- 2) Verify that switches SW1 and SW2 are set to the off position.

2

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX16050 or MAX16051 when contacting these component suppliers.

- 3) Connect the positive terminal of the 3.5V power supply to the U1\_VCC and U2\_VCC test points. Connect the ground terminal of this power supply to the respective GND test points.
- 4) Connect the positive terminal of a 5V power supply to the VPULLUP test point. Connect the ground terminal of this power supply to the GND test point.
- 5) Connect oscilloscope channels 1 and 2 to the U1\_ RESET and U2\_ RESET test points, respectively. Connect the ground leads to the nearby black GND test points.
- 6) Turn on the VCC power supply and adjust the voltage to 3.5V.
- 7) Turn on the VPULLUP power supply and adjust the voltage to 5V.
- 8) Verify  that  both  U1\_ RESET and U2\_ RESET signals are high.
- 9) The EV kit is ready for further testing.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

| DESIGNATION             |   QTY | DESCRIPTION                                                  |
|-------------------------|-------|--------------------------------------------------------------|
| R35                     |     1 | 20.5k Ω ±1% resistor (0805)                                  |
| SW1                     |     1 | 4-position DIP switch                                        |
| SW2                     |     1 | 10-position DIP switch                                       |
| U1_VCC, U2_VCC, VPULLUP |     3 | PC large red test points                                     |
| U1                      |     1 | 4-channel voltage sequencer (28 TQFN-EP*) Maxim MAX16050ETI+ |
| U2                      |     1 | 5-channel voltage sequencer (28 TQFN-EP*) Maxim MAX16051ETI+ |
| -                       |    32 | Shunts (J1, J2, JU1-JU15)                                    |
| -                       |     1 | PCB: MAX16050 Evaluation Kit+                                |

## MAX16050 Evaluation Kit

Table 1. MAX16050/MAX16051 EV Kit Jumper Description

| JUMPER   | JUMPER   | SIGNAL           | SHUNT POSITION   | FUNCTION                                                                          |
|----------|----------|------------------|------------------|-----------------------------------------------------------------------------------|
| MAX16050 | MAX16051 | SIGNAL           | SHUNT POSITION   | FUNCTION                                                                          |
| J1       | J2       | EV kit operation | 1-2*, 2-3        | Demo mode (see Figure 1)                                                          |
| J1       | J2       | EV kit operation | 2-3 only         | DC-DC mode (see Figure 1)                                                         |
| JU1      | JU10     | OUT_             | 1-2              | OUT_ connects to VCC through resistor                                             |
| JU1      | JU10     | OUT_             | 2-3*             | OUT_ connects to VPULLUP through resistor                                         |
| JU2      | JU11     | EN               | 1-2*             | Controllers enabled at U1_VCC/U2_VCC > 3.2V                                       |
| JU2      | JU11     | EN               | 2-3              | Controllers disabled                                                              |
| JU3      | JU12     | OUT3             | 1-2              | Connects to CP_OUT through resistor                                               |
| JU3      | JU12     | OUT3             | 2-3*             | Connection dependent on jumpers JU1 and JU10 configuration                        |
| JU4      | -        | SEQ1             | Not installed*   | Sequence order: OUT1, OUT2, OUT3, OUT4                                            |
| JU5      | -        | SEQ2             | Not installed*   | Sequence order: OUT1, OUT2, OUT3, OUT4                                            |
| JU6      | -        | SEQ3             | Not installed*   | Sequence order: OUT1, OUT2, OUT3, OUT4                                            |
| JU7      | JU15     | EN_HOLD          | 1-2*             | Normal operation of EN and SHDN functions                                         |
| JU7      | JU15     | EN_HOLD          | 2-3              | Ignores high-to-low transitions at SHDN and EN                                    |
| JU8      | JU13     | SHDN             | Not installed*   | Controller enabled or externally driven                                           |
| JU8      | JU13     | SHDN             | Installed        | Controllers disabled. Reverse power-down sequencing. RESET asserts low.           |
| JU9      | JU14     | FAULT            | Not installed*   | Normal operation                                                                  |
| JU9      | JU14     | FAULT            | Installed        | Disables controller. Initiates simultaneous power-down of OUT. RESET asserts low. |

*Default position (demo mode operation).

## Detailed Description of Hardware

The MAX16050 evaluation kit (EV kit) evaluates the 4channel MAX16050 and 5-channel MAX16051 powersupply sequencing ICs. The MAX16050 EV kit monitors up to nine DC-DC converter outputs, thus ensuring proper power-up and power-down conditions for systems requiring voltage sequencing. During powerdown, the outputs can be reverse-sequenced by driving SHDN low. The MAX16050 EV kit's VCC powersupply inputs require 2.7V to 13.2V and VPULLUP requires 2.2V to 5.5V.

The MAX16050 EV kit can operate in DC-DC mode or in demo mode. DC-DC mode uses the MAX16050 and MAX16051 to control external DC-DC converters, and without demo mode facilitates stand-alone evaluation without external DC-DC converters.

The EV kit features RESET output signals to indicate an undervoltage condition, or when shunts are installed across  the  jumpers  labeled SHDN or FAULT . Additionally, dedicated OV\_OUT outputs indicate overvoltage faults when any of the monitored EV kit IN inputs go above their overvoltage thresholds. The EV kit also provides test points OUTPUT1 and OUTPUT2 for low-current n-channel MOSFETs N1 and N2, respectively, which are controlled by the MAX16050 and MAX16051 chargepump outputs. Refer to the MAX16050/MAX16051 IC data sheet for additional information on selecting appropriate MOSFETs when driving external MOSFETs using the charge-pump outputs.

<!-- image -->

## Power-Supply Connections (U1\_VCC, U2\_VCC, VPULLUP)

The MAX16050 EV kit requires input voltages of 2.7V to 13.2V connected at the U1\_VCC and U2\_VCC test points to power the MAX16050 and MAX16051 controllers,  respectively.  The  power  supplies  must provide at  least  50mA of current. VPULLUP requires an input voltage of 2.2V to 5.5V connected to the VPULLUP test point and supplies power to the EV kit's pullup resistor open-drain outputs. The VPULLUP power supply must provide at least 50mA of current. Additional surfacemount 1206 PCB pads are provided for adding additional  bulk  capacitance at C1, C2, and C12 for the EV kit power-supply inputs. Header pins J3-J6 are available to use as ground reference for signal and voltage probing.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16050 Evaluation Kit

## DC-DC Mode

For DC-DC mode operation, connect the DC-DC converter outputs and EN/ SHDN inputs to the EV kit's IN\_ and OUT\_ header pins, respectively, and place shunts across pins 2-3 of headers J1 and J2. Header J1 drives the U1\_IN1-U1\_IN4 MAX16050 inputs and header J2 drives the U2\_IN1-U2\_IN5 MAX16051 inputs. See Table 1 and Figure 1 for headers J1 and J2 configuration  for  DC-DC and demo modes of operation. By default, the input-voltage thresholds are set according to Table 2.

The sequence delay between each of the OUT\_ outputs is the time required for the external converter voltage to exceed the undervoltage threshold, the respective channel open-drain output OUT\_ going high impedance, and the additional time delay set by external delay capacitors C10 and C20. As each IN\_ voltage meets its respective threshold, the next OUT\_ in the sequence goes high impedance (open-drain output), enabling the next power supply, which is then monitored by the next input stage. When all the voltages exceed their respective thresholds, RESET goes high after the reset timeout period set by capacitors C11 and C21.

Figure 1. Headers J1/J2 Shunt Configurations for DC-DC and Demo Mode Operation

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 2. Input Channel Threshold Voltages

| INPUT CHANNEL   |   INPUT THRESHOLD VOLTAGE (V) | RESISTORS        |
|-----------------|-------------------------------|------------------|
| U1_IN1, U2_IN1  |                          3.13 | R12/R13, R32/R33 |
| U1_IN2, U2_IN2  |                          2.28 | R9/R10, R29/R30  |
| U1_IN3, U2_IN3  |                          1.71 | R6/R7, R26/R27   |
| U1_IN4, U2_IN4  |                          1.43 | R3/R4, R23/R24   |
| U2_IN5          |                          1.14 | R35/R36          |

## Demo Mode

The MAX16050 EV kit allows quick evaluation of the MAX16050 and MAX16051 ICs individually without interfacing DC-DC converters to the kit's IN and OUT header pins. Place shunts across pins 1-2 and pins 2-3 of headers J1 and J2 to operate the MAX16050 EV kit in demo mode. In demo mode, VCC or VPULLUP powers the inputs to the respective IN\_ channels with the OUT\_ pullup voltage. Demo mode operation requires a minimum 3.5V applied at the VCC or VPULLUP PCB input pads. See Table 1 and Figure 1 for proper shunt placement when operating the MAX16050 EV kit in demo mode. Note that when operating the MAX16050 EV kit in demo mode, both OV\_OUT signals will be asserted low.

To daisy chain the MAX16050 and MAX16051 while operating the EV kit in demo mode, See the Configuring the MAX16050 EV Kit for Daisy-Chain Operation (SW1) section.

## Input Channel Threshold Voltages (IN\_)

The EV kit input-voltage thresholds are set to operate with 3.3V, 2.5V, 1.8V, 1.5V, and 1.2V (MAX16051) voltage systems. All input-voltage thresholds can be reconfigured by replacing the corresponding resistors, as shown in Table 2. Refer to the Resistor Value Selection section in the MAX16050/MAX16051 IC data sheet to calculate the new resistor values when reconfiguring the EV kit input thresholds.

## OUT\_ Pullup Voltage Selection (JU1, JU10)

Jumpers JU1 and JU10 select the OUT\_ open-drain pullup voltage. Place a shunt across pins 1-2 of jumpers JU1 and JU10 to select the respective powersupply inputs (U1\_VCC, U2\_VCC) as the OUT\_ logichigh voltage. Place shunts across pins 2-3 of jumpers JU1 and JU10 to select VPULLUP as the OUT\_ logichigh voltage. See Table 3 for proper jumper settings for OUT\_'s logic-high voltage configuration.

<!-- image -->

## MAX16050 Evaluation Kit

Caution: When operating the MAX16050 EV kit U1\_VCC or U2\_VCC inputs with power supplies greater than 5.5V, verify that shunts are installed across pins 2-3 of jumpers JU1 and JU10 to prevent operating the opendrain logic outputs above the maximum voltage rating.

## Table 3. Jumpers JU1, JU10 Configuration

| SHUNT POSITION   | OUT_ PULLUP RESISTOR VOLTAGE SOURCE       |
|------------------|-------------------------------------------|
| 1-2              | OUT_ connects to VCC through resistor     |
| 2-3              | OUT_ connects to VPULLUP through resistor |

## EN Control (JU2, JU11)

Jumpers JU2 and JU11 enable or disable the MAX16050 and MAX16051, respectively, for power-up sequencing and simultaneous power-down operation. Install shunts across pins 1-2 of jumpers JU2 and JU11 to initiate a power-up sequence. Install a shunt across pins 2-3 to power down the channels and to assert RESET .  See Table 4 for jumpers JU2 and JU11 configuration.

## Table 4. Jumpers JU2, JU11 Configuration

| SHUNT POSITION   | EN INPUT SETTING                                       |
|------------------|--------------------------------------------------------|
| 1-2              | EN connected to resistor-divider (controllers enabled) |
| 2-3              | EN = GND (controllers disabled)                        |

The voltage threshold of each analog EN input is configured to 3.17V using resistors R1/R2 (U1) and R20/R22 (U2). Use the following equation to calculate a new R1 or R20 resistor value to change the enable threshold:

where VEN is the desired VCC undervoltage threshold, 0.5V is the MAX16050/MAX16051 EN threshold voltage, and RA is the new resistor value for R1 or R20 in kilohms.

## Charge-Pump Outputs (CP\_OUT)

The  EV  kit  features  test  points  (U1\_CP\_OUT, U2\_CP\_OUT) to monitor the MAX16050 and MAX16051 charge-pump outputs. PCB pads are also available for the installation of low-current SOT23 footprint n-channel MOSFETs at N1 and N2.

The EV kit's charge-pump outputs can also be used as the  pullup  voltages  for  open-drain  output  OUT3 using jumpers JU3 and JU12. See Table 5 for configuring OUT3 to the respective charge-pump outputs.

## Table 5. Jumpers JU3, JU12 Configuration

| SHUNT POSITION   | OUT3 PULLUP VOLTAGE                                                  |
|------------------|----------------------------------------------------------------------|
| 1-2              | Connects to CP_OUT through resistor                                  |
| 2-3              | Connection dependent on jumpers JU1/JU10 configuration (see Table 3) |

## MAX16050 Sequence Order (JU4, JU5, JU6)

Jumpers JU4, JU5, and JU6 configure the MAX16050 sequencing order. The jumper settings allow up to 24 different power-up combinations. The MAX16051 does not feature programmable power-supply sequencing and powers up in a fixed order from U2\_OUT1-U2\_ OUT5. See Table 6 to configure the sequencing order for U1\_OUT1-U1\_OUT4.

<!-- formula-not-decoded -->

Table 6. MAX16050 Sequencing Control (JU4, JU5, JU6)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SEQUENCE ORDER   | SEQUENCE ORDER   | SEQUENCE ORDER   | SEQUENCE ORDER   |
|------------------|------------------|------------------|------------------|------------------|------------------|------------------|
| JU4              | JU5              | JU6              | 1ST              | 2ND              | 3RD              | 4TH              |
| Not installed    | Not installed    | Not installed    | U1_OUT1          | U1_OUT2          | U1_OUT3          | U1_OUT4          |
| Not installed    | Not installed    | 2-3              | U1_OUT1          | U1_OUT2          | U1_OUT4          | U1_OUT3          |
| Not installed    | Not installed    | 1-2              | U1_OUT1          | U1_OUT3          | U1_OUT2          | U1_OUT4          |
| Not installed    | 2-3              | Not installed    | U1_OUT1          | U1_OUT3          | U1_OUT4          | U1_OUT2          |
| Not installed    | 2-3              | 2-3              | U1_OUT1          | U1_OUT4          | U1_OUT2          | U1_OUT3          |
| Not installed    | 2-3              | 1-2              | U1_OUT1          | U1_OUT4          | U1_OUT3          | U1_OUT2          |
| Not installed    | 1-2              | Not installed    | U1_OUT2          | U1_OUT1          | U1_OUT3          | U1_OUT4          |
| Not installed    | 1-2              | 2-3              | U1_OUT2          | U1_OUT1          | U1_OUT4          | U1_OUT3          |
| Not installed    | 1-2              | 1-2              | U1_OUT2          | U1_OUT3          | U1_OUT1          | U1_OUT4          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16050 Evaluation Kit

Table 6. MAX16050 Sequencing Control (JU4, JU5, JU6) (continued)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | SEQUENCE ORDER   | SEQUENCE ORDER   | SEQUENCE ORDER   | SEQUENCE ORDER   |
|------------------|------------------|------------------|------------------|------------------|------------------|------------------|
| JU4              | JU5              | JU6              | 1ST              | 2ND              | 3RD              | 4TH              |
| 2-3              | Not installed    | Not installed    | U1_OUT2          | U1_OUT3          | U1_OUT4          | U1_OUT1          |
| 2-3              | Not installed    | 2-3              | U1_OUT2          | U1_OUT4          | U1_OUT1          | U1_OUT3          |
| 2-3              | Not installed    | 1-2              | U1_OUT2          | U1_OUT4          | U1_OUT3          | U1_OUT1          |
| 2-3              | 2-3              | Not installed    | U1_OUT3          | U1_OUT1          | U1_OUT2          | U1_OUT4          |
| 2-3              | 2-3              | 2-3              | U1_OUT3          | U1_OUT1          | U1_OUT4          | U1_OUT2          |
| 2-3              | 2-3              | 1-2              | U1_OUT3          | U1_OUT2          | U1_OUT1          | U1_OUT4          |
| 2-3              | 1-2              | Not installed    | U1_OUT3          | U1_OUT2          | U1_OUT4          | U1_OUT1          |
| 2-3              | 1-2              | 2-3              | U1_OUT3          | U1_OUT4          | U1_OUT1          | U1_OUT2          |
| 2-3              | 1-2              | 1-2              | U1_OUT3          | U1_OUT4          | U1_OUT2          | U1_OUT1          |
| 1-2              | Not installed    | Not installed    | U1_OUT4          | U1_OUT1          | U1_OUT2          | U1_OUT3          |
| 1-2              | Not installed    | 2-3              | U1_OUT4          | U1_OUT1          | U1_OUT3          | U1_OUT2          |
| 1-2              | Not installed    | 1-2              | U1_OUT4          | U1_OUT2          | U1_OUT1          | U1_OUT3          |
| 1-2              | 2-3              | Not installed    | U1_OUT4          | U1_OUT2          | U1_OUT3          | U1_OUT1          |
| 1-2              | 2-3              | 2-3              | U1_OUT4          | U1_OUT3          | U1_OUT1          | U1_OUT2          |
| 1-2              | 2-3              | 1-2              | U1_OUT4          | U1_OUT3          | U1_OUT2          | U1_OUT1          |

## EN\_HOLD (JU7, JU15)

Jumpers JU7 and JU15 configuration setting allows the MAX16050 and MAX16051 to ignore high-to-low transitions at the EN and SHDN inputs. Place a shunt across pins 1-2 for normal operation of the EN and SHDN feature. Place a shunt across pins 2-3 to ignore high-to-low transitions  at  EN  and SHDN .  See  Table  7  for  jumpers JU7 and JU15 configuration.

## SHDN Control (JU8, JU13)

Jumpers JU8 and JU13 initiate the MAX16050 and MAX16051 for a reverse-sequencing event. Install shunts on jumpers JU8 and JU13 to initiate a reversesequencing event. Remove the shunts at jumpers JU8 and JU13 for proper power-up operation when EN = high. To drive SHDN externally,  place  a  square-wave signal with a 2V to 5.5V logic-high level at pin 1 of jumpers JU8 or JU13. See Table 8 for jumpers JU8 and JU13 configuration.

## FAULT Control (JU9, JU14)

Jumpers JU9 and JU14 control the MAX16050 and MAX16051 input/output FAULT signal, respectively. FAULT asserts low when any of the monitored IN voltages fall below its SET voltage threshold. As an output, FAULT can be driven externally to initiate a simultaneous power-down of the DC-DC controllers. Install a shunt across jumpers JU9 and JU14 to initiate a shutdown of the controllers. To drive FAULT externally, place a square-wave signal with a 2V to 5.5V logic-high level at pin 1 of jumpers JU8 or JU14. Connect the signal ground to a convenient ground reference. See Table 9 for jumpers JU9 and JU14 configuration.

Table 7. Jumpers JU7, JU15 Configuration

| SHUNT POSITION   | EN_HOLD INPUT SETTING                          |
|------------------|------------------------------------------------|
| 1-2              | Normal operation of EN and SHDN functions      |
| 2-3              | Ignores high-to-low transitions at EN and SHDN |

## Table 8. Jumpers JU8, JU13 Configuration

| SHUNT POSITION   | SHDN INPUT SETTING                                |
|------------------|---------------------------------------------------|
| Not installed    | Controller enabled or externally driven           |
| Installed        | Reverse power-down sequencing. RESET asserts low. |

Table 9. Jumpers JU9, JU14 Configuration

| SHUNT POSITION   | FAULT INPUT SETTING                                                                |
|------------------|------------------------------------------------------------------------------------|
| Not installed    | Normal operation                                                                   |
| Installed        | Disables controller. Initiates simultaneous power down of OUT_. RESET asserts low. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16050 Evaluation Kit

## Sequence Delay Control

Capacitors C10 or C20 set the tDELAY periods for U1 and U2 to 644µs, respectively. Replace the capacitors with different values to adjust the tDELAY periods, or remove the capacitors to set the tDELAY periods to 34µs. Use the following equation to calculate a new capacitor value when adjusting the tDELAY period:

<!-- formula-not-decoded -->

where C is the capacitance of C10 or C20 in farads, and tDELAY is in seconds.

## Reset Timeout Control

Capacitors C11 and C21 set the tTIMEOUT period for U1 and U2 to 1.1ms, respectively. Replace the capacitors with a different value to adjust the tTIMEOUT periods, or remove the capacitors to set the tTIMEOUT period to 34µs. Use the following equation to calculate new capacitor values when adjusting the tTIMEOUT period:

<!-- formula-not-decoded -->

where C is the capacitance of C11 or C21 in farads, and tTIMEOUT is in seconds.

## Channel Bypassing (SW2)

DIP switch SW2 allows the MAX16050 EV kit to bypass any unused channels and to power up successfully when using fewer than four or five DC-DC converters with the U1\_IN1-U1\_IN4 and U2\_IN1-U2\_IN5 inputs, respectively. To bypass a channel, remove the shunts connected across pins 1-2 and 2-3 of headers J1 or J2, and set the respective SW2 switch to the on position. See Table 10 for the input channel assignment on switch SW2.

## Logic Outputs ( OV\_OUT , RESET )

The MAX16050 EV kit features test points U1\_ OV\_OUT , U2\_ OV\_OUT ,  U1\_ RESET ,  and  U2\_ RESET to  monitor fault  conditions  on  each  controller.  U1\_ OV\_OUT and U2\_ OV\_OUT assert low when any of the monitored IN voltages rise above their overvoltage threshold. See Table 11 for the input channel overvoltage thresholds.

<!-- image -->

The EV kit RESET signals assert low under the following conditions:

- 1) Any monitored voltage falls below its input threshold.
- 2) EN falls below the enable threshold.
- 3) FAULT output is pulled low.
- 4) SHDN is pulled low (note that when SHDN is pulled low, the controller initiates a reverse-sequence power-down).

## Table 10. SW2 Channel Bypass

|   SWITCH | BYPASS CHANNEL   |
|----------|------------------|
|        1 | U1_IN4           |
|        2 | U1_IN3           |
|        3 | U1_IN2           |
|        4 | U1_IN1           |
|        5 | U2_IN5           |
|        6 | U2_IN4           |
|        7 | U2_IN3           |
|        8 | U2_IN2           |
|        9 | U2_IN1           |
|       10 | Not used         |

## Table 11. Input Overvoltage Thresholds

| INPUT CHANNEL       |   INPUT OVERVOLTAGE THRESHOLD (V) |
|---------------------|-----------------------------------|
| _IN1                |                              3.43 |
| _IN2                |                              2.61 |
| _IN3                |                              1.89 |
| _IN4                |                              1.55 |
| IN5 (MAX16051 only) |                              1.23 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16050 Evaluation Kit

## Configuring the MAX16050 EV Kit for Daisy-Chain Operation (SW1)

The MAX16050 EV kit can be configured for daisychain operation of the MAX16050 (U1) and the MAX16051 (U2) by configuring DIP switch SW1 and various jumpers. See Tables 12 and 13 for switch SW1 and the proper jumper configurations, respectively, to configure the EV kit for daisy-chain operation. For proper  daisy-chain operation of U1 and U2, all of SW1 switches should be set to the on position.

To initiate a power-up sequence, install a shunt across pins 1-2 of jumper JU2 (U1\_EN). U1\_IN1-U1\_IN4 sequence according to the shunt configurations of jumpers JU4, JU5, and JU6 (Table 6). Upon U1\_ inputs rising above their respective thresholds, the U1\_ RESET signal goes high and drives U2\_EN input high (SW1-4) allowing sequencing to commence on the MAX16051. Upon  U2  controller  sequencing  successfully, U2\_ RESET goes high.

Table 12. SW1 Switch Functions

| SW1 DESIGNATION   | SWITCH POSITION   | EV KIT OPERATION                                                                                                              |
|-------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------|
| SHDN              | On                | U1 and U2 SHDN inputs connected and controlled by one signal.                                                                 |
| REV_SEQ           | On                | Connects U2_REM to U1_ EN_HOLD . Reverse-sequence U2_OUT and then U1_OUT when a shunt is installed across jumper JU8 or JU13. |
| FAULT             | On                | Connects UI_ FAULT and U2_ FAULT . All outputs power down simultaneously during fault conditions.                             |
| SEQ               | On                | Connects U1_ RESET to U2_EN. Sequences U1 OUT_ and then U2 OUT_.                                                              |

Table 13. Jumper Configuration for Daisy-Chain Operation

| JUMPER    | SHUNT POSITION   | EV KIT OPERATION                                     |
|-----------|------------------|------------------------------------------------------|
| JU2       | 1-2              | U1 controllers enabled at U1_VCC = 3.3V (DC-DC mode) |
| JU7       | Not installed    | U1_ EN_HOLD controlled by U2_REM                     |
| JU8, JU13 | Not installed    | U1_ SHDN and U2_ SHDN = high                         |
| JU9, JU14 | Not installed    | U1_ FAULT and U2_ FAULT connected together           |
| JU11      | Not installed    | U2_EN controlled by switch SW1-4                     |
| JU15      | 1-2              | U2_ EN_HOLD = high                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

To initiate  a  reverse  power-down sequence, install a shunt across jumper JU8 or JU13. When all the IN\_ voltages monitored by U2 (U2\_IN1-U2\_IN5) have dropped below their undervoltage threshold, U2\_REM output goes high, thereby allowing U1\_OUT\_ to commence sequencing down. U2\_REM connects to U1\_ EN\_HOLD (through SW1-2) to force U1 controller to stay on even if U1\_EN and U1\_ SHDN are pulled low during a daisy-chain operation.

Switch SW1-3 connects U1 and U2 open-drain FAULT outputs together, resulting in a fast power-down of all inputs when a fault condition occurs on any of the inputs or when FAULT is  manually pulled low by installing a shunt across jumpers JU9 or JU14.

## MAX16050 Evaluation Kit

Figure 2a. MAX16050 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX16050 Evaluation Kit

Figure 2b. MAX16050 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16050 Evaluation Kit

<!-- image -->

Figure 3. MAX16050 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16050 Evaluation Kit

Figure 4. MAX16050 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16050 Evaluation Kit

Figure 5. MAX16050 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.
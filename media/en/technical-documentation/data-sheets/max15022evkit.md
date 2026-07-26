<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX15022 Evaluation Kit

## General Description

The MAX15022 evaluation kit (EV kit) circuit demonstrates the MAX15022 IC, which integrates two highperformance PWM switching step-down regulators and two low-dropout (LDO) controllers. Each controller and regulator features independent enable controls for power-up sequence operation. The EV kit is designed to operate from a single 4.5V to 5.5V DC power supply.

The synchronous step-down outputs provide 3.3V/4A and 1.5V/2A, and can be configured for power-up sequencing or tracking operation. The converter switching frequency is set to 2MHz and operates 180° out-of-phase, reducing input voltage ripple and total RMS input ripple current. The LDO outputs provide 2.5V and 1.2V, at up to 500mA each. Each LDO controller is powered from either the input power source or one of the regulator outputs.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15022EVKIT+ | EV Kit |

| DESIGNATION                |   QTY | DESCRIPTION                                                                           |
|----------------------------|-------|---------------------------------------------------------------------------------------|
| C1                         |     1 | 150µF ±20%, 10V aluminum electrolytic capacitor (6.6mm x 6.6mm) Panasonic EEEFK1A151P |
| C2, C4, C9, C10, C14, C18  |     6 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K                   |
| C3, C8, C11, C12, C19, C21 |     6 | 10µF ±10%, 6.3V X7R ceramic capacitors (0805) Murata GRM21BR70J106K                   |
| C5                         |     1 | 180pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H181J                     |
| C6                         |     1 | 390pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H391J                     |
| C7, C16                    |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J                     |
| C13, C23, C24              |     0 | Not installed, capacitors (0805)                                                      |

<!-- image -->

Features

- ♦ 4.5V to 5.5V Input Range
- ♦ Regulator Outputs 3.3V at 4A 1.5V at 2A
- ♦ 2MHz Switching Frequency
- ♦ LDO Outputs 2.5V (Up to 500mA) 1.2V (Up to 500mA)
- ♦ Independent Enable Inputs for All Outputs
- ♦ Configurable Power-Up Sequencing for Outputs
- ♦ Configurable Power-Up Tracking for Regulators (VOUT1, VOUT2)
- ♦ Thermal Shutdown and Hiccup-Mode ShortCircuit Protection
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C15           |     1 | 68pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H680J     |
| C17           |     1 | 270pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H271J    |
| C20, C22      |     2 | 1µF ±10%, 10V X7R ceramic capacitors (0805) TDK C2012X7R1A105K       |
| C25, C26      |     0 | Not installed, ceramic capacitors (0603)                             |
| C27, C28      |     2 | 2200pF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C222K |
| JU1-JU4       |     4 | 3-pin headers                                                        |
| L1            |     1 | 0.47µH, 5A inductor Vishay IHLP-1616BZ-ER-R47-M-01                   |
| L2            |     1 | 1µH, 4A inductor Vishay IHLP-1616BZ-ER-1R0-M-01                      |

## MAX15022 Evaluation Kit

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| Q1, Q2        |     2 | -20V, 1.5A pnp transistors (SOT223-4) Fairchild Semiconductor BCP69 |
| R1, R7        |     2 | 120 Ω ±5% resistors (0603)                                          |
| R2            |     1 | 100 Ω ±1% resistor (0603)                                           |
| R3            |     1 | 23.7k Ω ±1% resistor (0603)                                         |
| R4            |     1 | 7.5k Ω ±1% resistor (0603)                                          |
| R5            |     1 | 15.8k Ω ±1% resistor (0603)                                         |
| R6, R9, R10   |     3 | 11.5k Ω ±1% resistors (0603)                                        |
| R11           |     1 | 1.5k Ω ±1% resistor (0603)                                          |
| R12           |     1 | 18.7k Ω ±1% resistor (0603)                                         |
| R13           |     1 | 15 Ω ±1% resistor (0603)                                            |
| R14, R18      |     2 | 24.9k Ω ±1% resistors (0603)                                        |
| R15, R19, R24 |     3 | 16.5k Ω ±1% resistors (0603)                                        |

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| R16           |     1 | 1k Ω ±1% resistor (0603)                                       |
| R17, R21      |     2 | 15k Ω ±1% resistors (0603)                                     |
| R20           |     1 | 2.55k Ω ±1% resistor (0603)                                    |
| R22           |     1 | 47.5k Ω ±1% resistor (0603)                                    |
| R23           |     1 | 10.5k Ω ±1% resistor (0603)                                    |
| R25           |     1 | 18.2k Ω ±1% resistor (0603)                                    |
| R26           |     1 | 10k Ω ±1% resistor (0603)                                      |
| R27, R28      |     0 | Not installed, resistors (1206)                                |
| U1            |     1 | Dual regulator/LDO controller (28 TQFN-EP*) Maxim MAX15022ATI+ |
| -             |     4 | Shunts (JU1-JU4)                                               |
| -             |     1 | PCB: MAX15022 Evaluation Kit+                                  |

## Procedure

The MAX15022 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install  shunts across pins 2-3 of jumpers JU1 (VOUT1 input source for VOUT3) and JU2 (VOUT2 input source for VOUT4).

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 714-373-7366 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 203-268-6261 | www.vishay.com              |

Note: Indicate that you are using the MAX15022 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- Adjustable 4.5V to 5.5V, 5A DC power supply
- Four voltmeters
- 2) Install  shunts across pins 1-2 of jumpers JU3 (VOUT2  sequences  after  VOUT1)  and  JU4 (sequencing mode for outputs VOUT1, VOUT2).
- 3) Connect the voltmeter positive-terminal inputs to the VOUT1-VOUT4 PCB pads.
- 4) Connect the voltmeter negative-terminal inputs to the respective output's PGND PCB pads.
- 5) Connect a DC power supply to the VIN and PGND pads and set the voltage to 5V.
- 6) Enable the power-supply output.
- 7) Verify  that  the  voltmeters  at  VOUT1-VOUT4 measure 3.3V, 1.5V, 2.5V, and 1.2V, respectively.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15022 Evaluation Kit

## Detailed Description of Hardware

The  MAX15022  EV  kit  circuit  demonstrates  the MAX15022 IC, which integrates two high-performance PWM switching synchronous step-down regulators and two LDO controllers. The EV kit regulator outputs can be configured for sequencing, ratiometric-tracking, or coincident-tracking mode. The MAX15022 IC operates with either step-down regulator outputs as the master; however, the EV kit is designed with VOUT1 as the master during tracking operation. Each controller and regulator features independent enable controls for power-up sequencing operation. The EV kit is designed to operate from a single DC power supply that provides 4.5V to 5.5V and 5A of current.

The EV kit's dual step-down regulator's outputs (VOUT1 and VOUT2) are configured for 3.3V and 1.5V, providing up to 4A and 2A, respectively. The regulator's tracking sequencing operation modes are selectable through jumpers JU3 and JU4. The switching frequency is set to 2MHz by resistor R24 and can be programmed from 500kHz to 4MHz. The outputs operate 180° out-ofphase to reduce input voltage ripple and total RMS input ripple current.

The LDO outputs (VOUT3 and VOUT4) are configured for  2.5V  and 1.2V, respectively, and provide up to 500mA each. Jumpers JU1 and JU2 select the LDO's input power source or configure VOUT3 and VOUT4 for power-supply sequencing to the regulator outputs, VOUT1 and VOUT2, respectively.

## Input Power Source

The MAX15022 EV kit regulator outputs (VOUT1 and VOUT2) are optimized to provide up to 4A and 2A, respectively, when operating with an input-voltage source of 4.5V to 5.5V. The EV kit accommodates input voltages down to 2.35V; however, each output rail's passive filtering,  enabling,  and  compensation circuitry needs to be revisited to confirm optimal performance. Additionally, VOUT1's 3.3V rail likely needs to be readjusted to a lower-than-VIN potential. Refer to the MAX15022 IC data sheet for additional information on the minimum voltage requirements, as well as the PWM Controllers Design Procedure and LDO Controllers Design Procedure sections.

## Regulator's Power Tracking/Sequencing

The MAX15022 EV kit can be configured to power up and power down the VOUT1 and VOUT2 outputs in sequencing, ratiometric-tracking, or coincidenttracking mode by configuring jumpers JU3 and JU4.

<!-- image -->

The MAX15022 IC operates with either regulator output as the master or slave during tracking mode. However, the MAX15022 EV kit is designed with VOUT1 as the master and VOUT2 as the slave during tracking operation.  See  Table  1  for  jumpers  JU3  and JU4 configuration  for  operating  the  EV  kit  step-down  regulators  in tracking or sequencing mode.

## Table 1. VOUT1/VOUT2 Tracking/ Sequencing Operation (JU3, JU4)

| SHUNT POSITION   | SHUNT POSITION   | EV KIT CIRCUIT MODIFICATION   | EV KIT VOUT1/VOUT2 OPERATION                          |
|------------------|------------------|-------------------------------|-------------------------------------------------------|
| JU3              | JU4              | EV KIT CIRCUIT MODIFICATION   | EV KIT VOUT1/VOUT2 OPERATION                          |
| 1-2              | 1-2              | -                             | Sequence mode                                         |
| 2-3              | 2-3              | -                             | Coincident-tracking mode (VOUT1 master, VOUT2 slave)  |
| 2-3              | 2-3              | Resistor R14 must be removed  | Ratiometric-tracking mode (VOUT1 master, VOUT2 slave) |

The EV kit's VOUT1 and VOUT2 outputs are configured for  coincident-tracking operation by default. VOUT2 output voltage ramps up, tracking the VOUT1 voltage using resistor pairs R14/R15 and R18/R19, which sets the resistor-divider ratios. Place shunts across pins 2-3 of jumpers JU3 and JU4 to operate VOUT1 and VOUT2 in coincident tracking mode.

In  ratiometric-tracking  mode, VOUT1 and VOUT2 softstart  controllers  are  synchonized, and hence, their respective output voltages track ratiometrically. For ratiometric-tracking operation, the EV kit PCB requires a minor modification. Place shunts across pins 2-3 of jumpers JU3 and JU4 and remove resistor R14 for ratiometric-tracking mode.

When operating the EV kit in sequencing mode, each regulator operates independently with its own enable input. To operate regulator outputs VOUT1 and VOUT2 in  sequencing mode, install shunts across pins 1-2 of jumpers JU3 and JU4. The VOUT2 output does not turn on until VOUT1 rises above the EN2 1.22V threshold.

Refer to the Tracking/Sequencing section in the MAX15022 IC data sheet for additional information on operating in coincident/ratiometric-tracking and sequencing modes, and to calculate the proper values for resistor pairs R14/R15 and R18/R19.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15022 Evaluation Kit

## Step-Down Regulator Output Voltages (VOUT1, VOUT2)

Regulator output VOUT1 is set to 3.3V with resistors R22 and R23 and provides up to 4A at 90% efficiency. Capacitors C15, C16, and C17, and resistors R18 and R19 provide a compensation network for VOUT1 on the EV kit.

Regulator output VOUT2 is set to 1.5V with resistors R18 and R19 and provides up to 2A at 84% efficiency. Capacitors C5, C6, and C7, and resistors R16 and R17 provide a compensation network for VOUT2 on the EV kit.

VOUT1 and VOUT2 output voltages can be reconfigured between 0.6V to VIN by replacing the respective feedback resistors. To reconfigure the regulator outputs, refer to the Compensation Design Guidelines section in the MAX15022 IC data sheet for instructions on selecting new resistor values. Also refer to the Effective Input-Voltage Range section in the MAX15022 IC data sheet for the minimum and maximum input-voltage range when reconfiguring the regulator outputs.

Component changes are necessary for proper operation after reconfiguring the output voltage. Refer to the Inductor Selection, Input-Capacitor Selection, and the Compensation Design Guidelines sections in the MAX15022 IC data sheet to select the proper values.

## 2.5V LDO Output (VOUT3)

The VOUT3 LDO output is set to 2.5V by feedback resistors R3 and R4 and provide up to 500mA of output current. Jumper JU1 selects the input power source for VOUT3  or  configures  VOUT3  for  power-supply sequencing with VOUT1. Install a shunt across pins 1-2 to select VIN as the input power source. Install a shunt across pins 2-3 to select VOUT1 as the LDO input power source. Resistors R5 and R6 set VOUT3 turn-on threshold to 3V. See Table 2 for proper jumper configuration of VOUT3 input power source.

Table 2. VOUT3 Input Power Source (JU1)

| SHUNT POSITION   | VOUT3 INPUT POWER SOURCE   | EV KIT OPERATION   |
|------------------|----------------------------|--------------------|
| 1-2              | VIN                        | VOUT3 enabled      |
| 2-3              | VOUT1                      | VOUT3 enabled      |
| Not installed    | -                          | VOUT3 disabled     |

To reconfigure VOUT3 to different output voltages, refer to the Output 3 and Output 4 Voltage Selection section in the MAX15022 IC data sheet for additional information.

VOUT3 current capability is restricted by the regulator's input power source, the output voltage setting, and transistor Q1. Verify that Q1 power dissipation rating is not exceeded when operating the LDO regulator at high input-to-output voltage differentials and full load.

## 1.2V Regulator Output (VOUT4)

VOUT4 LDO output is set to 1.2V by feedback resistors R9 and R10 and provides up to 500mA of output current.  Jumper JU2 selects the input power source for VOUT4  or  configures  VOUT4  for  power-supply sequencing with VOUT2. Install a shunt across pins 1-2 to select VIN as the input power source. Install a shunt across pins 2-3 to select VOUT2 as the LDO input power source. Resistors R11 and R12 set the VOUT4 turn-on threshold to 1.3V. See Table 3 for proper jumper configuration of VOUT4 input power source.

Table 3. VOUT4 Input Power Source (JU2)

| SHUNT POSITION   | VOUT4 INPUT POWER SOURCE   | EV KIT OPERATION   |
|------------------|----------------------------|--------------------|
| 1-2              | VIN                        | VOUT4 enabled      |
| 2-3              | VOUT2                      | VOUT4 enabled      |
| Not installed    | -                          | VOUT4 disabled     |

To reconfigure VOUT4 to different output voltages, refer to the Output 3 and Output 4 Voltage Selection section in the MAX15022 IC data sheet for additional information.

VOUT4 current capability is restricted by the regulator's input power source, the output voltage setting, and transistor Q2. Verify that Q2 power dissipation rating is not exceeded when operating the LDO regulator at high input-to-output voltage differentials and full load.

## Switching Frequency

The MAX15022 switching frequency is set to 2MHz by resistor  R24.  Replace resistor R24 with a new resistor value to program the switching frequency between 500kHz and 4MHz. Use the following equation to select R24 when reconfiguring the switching frequency:

<!-- formula-not-decoded -->

where fSW is in hertz and R24 is in ohms.

When reconfiguring the EV kit switching frequency, it is necessary to replace the compensation network and power components. Refer to the Inductor Selection and Compensation Design Guidelines sections in the MAX15022 IC data sheet for computing new compensation and power component values.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15022 Evaluation Kit

Figure 1. MAX15022 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX15022 Evaluation Kit

Figure 2. MAX15022 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15022 Evaluation Kit

<!-- image -->

Figure 3. MAX15022 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15022 Evaluation Kit

Figure 4. MAX15022 EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15022 Evaluation Kit

<!-- image -->

Figure 5. MAX15022 EV Kit PCB Layout-Inner Trace Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15022 Evaluation Kit

Figure 6. MAX15022 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
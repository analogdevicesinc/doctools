<!-- lastmod 2022-08-03 -->
## General Description

The MAX8784 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that provides the voltages and features required for active-matrix, thin-film transistor  (TFT)  liquid-crystal  display  (LCD)  panels  in LCD monitors and LCD TVs. The EV kit contains a stepup switching regulator, a two-stage positive charge pump for the TFT gate-on supply, a single-stage negative charge pump for the TFT gate-off supply, and three high-current op amps. Two capacitor-control delays are available:  one  to  control  the  initial  startup  of  the  stepup, and the other to control the delay between the negative  and positive charge pumps. Also included is a logic-controlled, high-voltage switch for the positivegate driver supply. A high-voltage stress (HVS) mode is provided to increase the step-up and the positive charge-pump output voltages for stress testing the display panel during production. A capacitive dummy load is provided at the high-voltage switch output for ease of testing without a panel attached.

The EV kit operates from a DC supply voltage of +4.5V to +5.5V, as configured. The step-up switching regulator  is  configured  for  a  +14V  output  providing  at  least 700mA. The positive charge pump is configured for a +28V output providing at least 50mA. The negative charge pump is configured for a -9V output providing at least 50mA. The three high-current op amps are each configured for a +7V output that can source or sink 180mA. The high-voltage switch can be controlled by external logic. The EV kit's input voltage range can be lowered to +4V at slightly lower load currents.

The MAX8784 step-up switching regulator operates at 1.2MHz, allowing the use of tiny surface-mount components. The MAX8784 thin QFN package (0.8mm max height), with low-profile external components, allows this circuit to be less than 3mm high.

<!-- image -->

Features

- ♦ +4.5V to +5.5V Input-Voltage Range
- ♦ Output Voltages
- +14V Output at 700mA (Step-Up Switching Regulator)
- +28V Output at 50mA (Positive Charge Pump)
- -9V Output at 50mA (Negative
- Charge Pump)

Three High-Current Op Amps (±180mA)

- ♦ 1.2MHz Switching Frequency
- ♦ All Output Voltages are Resistor Adjustable
- ♦ Logic-Controlled, High-Voltage Switch
- ♦ High-Voltage Stress Mode for the Step-Up and Positive Charge-Pump Output Voltages
- ♦ Capacitor-Controlled Initial Startup Delay and Positive Charge-Pump Delay
- ♦ Low-Profile Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE       |
|---------------|---------------|------------------|
| MAX8784EVKIT+ | 0°C to +70°C* | 40 Thin QFN-EP** |

*This limited temperature range applies to the EV kit PCB only.

The MAX8784 IC temperature range is -40°C to +85°C.

**EP = Exposed paddle.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1, C2        |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J106M   |
| C3, C4        |     2 | 10µF ±20%, 16V X5R ceramic capacitors (1206) TDK C3216X5R1C106M    |
| C5            |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105K     |
| C6            |     0 | Not installed, capacitor (0402)                                    |
| C7            |     1 | 330pF ±10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H331K |

1

## MAX8784 Evaluation Kit

| DESIGNATION       |   QTY | DESCRIPTION                                                       |
|-------------------|-------|-------------------------------------------------------------------|
| C8                |     1 | 0.01µF ±10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R1A103K  |
| C9, C13, C14, C15 |     4 | 0.1µF ±10%, 25V X5R ceramic capacitors (0402) TDK C1005X5R1E104K  |
| C10               |     1 | 0.22µF ±10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J224K |
| C11, C16          |     2 | 1µF ±10%, 50V X7R ceramic capacitors (1206) TDK C3216X7R1H105K    |
| C12               |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K   |
| C17               |     1 | 1500pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H152K  |
| D1                |     1 | 3A,30V Schottky diode (M-Flat) ToshibaCMS02(TE12L, Q)             |
| D2                |     1 | 220mA, 100V dual diode (SOT23) Fairchild MMBD4148SE               |

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                                         |
|--------------------|-------|-----------------------------------------------------|
| JU1, JU2, JU4, JU5 |     4 | 2-pin headers                                       |
| JU3                |     1 | 3-pin header                                        |
| L1                 |     1 | 3µH, 3A DC inductor Sumida CDRH6D28-3R0             |
| R1                 |     1 | 205k Ω ±1% resistor (0603)                          |
| R2, R4, R5         |     3 | 20k Ω ±1% resistors (0603)                          |
| R3                 |     1 | 432k Ω ±1% resistor (0603)                          |
| R6                 |     1 | 187k Ω ±1% resistor (0603)                          |
| R7-R12             |     6 | 10k Ω ±5% resistors (0603)                          |
| R13, R17, R18      |     3 | 100k Ω ±5% resistors (0603)                         |
| R14, R15           |     0 | Not installed, resistors-short (PC trace) (0603)    |
| R16                |     1 | 100k Ω ±5% resistor (0402)                          |
| R19                |     1 | 1k Ω ±5% resistor (0603)                            |
| R20                |     0 | Not installed, resistor-short (PC trace) (0402)     |
| R21                |     1 | 82k Ω ±5% resistor (0603)                           |
| U1                 |     1 | MAX8784ETL+ (40-pin Thin QFN-EP, 5mm x 5mm x 0.8mm) |
| -                  |     1 | PCB: MAX8784 Evaluation Kit+                        |
| -                  |     5 | Shunts                                              |

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE               |
|---------------------------------------------|--------------|-----------------------|
| Fairchild Semiconductor                     | 888-522-5372 | www.fairchildsemi.com |
| Murata Mfg. Co., Ltd.                       | 770-436-1300 | www.murata.com        |
| Sumida Corp.                                | 847-545-6700 | www.sumida.com        |
| TDK Corp.                                   | 847-803-6100 | www.component.tdk.com |
| Toshiba America Electronic Components, Inc. | 949-455-2000 | www.toshiba.com/taec  |

Note:

Indicate that you are using the MAX8784 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Recommended Equipment

- +4.5V to +5.5V, 5A DC power supply
- One voltmeter

## Procedure

The MAX8784 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is installed across jumper JU1 (EV kit ON).
- 2) Verify  that  no  shunt  is  installed  across  jumper  JU2 (VGON internally connected to DRN).
- 3) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU3 (VGON discharges toward AVDD).
- 4) Verify  that  no  shunt  is  installed  across  jumper  JU4 (VGON is not connected to the capacitive dummy load C17).
- 5) Verify  that  no  shunt  is  installed  across  jumper  JU5 (high-voltage stress mode OFF).
- 6) Connect the positive terminal of the power supply to the VIN pad on the EV kit. Connect the negative terminal of the power supply to the PGND pad next to the VIN pad.
- 7) Turn on the power supply and set the supply to +5V.
- 8) Verify  that  the  step-up  switching  regulator  output (AVDD) is +14V.
- 9) Verify that the gate-on supply (POUT) is +28V.
- 10) Verify that the gate-off supply (VGOFF) is -9V.
- 11) Verify  that  the  op-amp  outputs  (OUT1,  OUT2, and OUT3) are +7V.

## Detailed Description

The MAX8784 EV kit contains a step-up switching regulator,  a  positive  charge pump, a negative charge pump, three high-current op amps, and a high-voltage switch matrix. The EV kit is configured to operate from a DC power supply between +4.5V to +5.5V that can provide at least 5A. The EV kit's input-voltage range can be extended to +4V to +5.5V at slightly lower load currents.  The  MAX8784 step-up regulator operates at a switching frequency of 1.2MHz.

The step-up switching regulator (AVDD) generates a +14V output and provides at least 700mA. The step-up switching regulator output voltage can be adjusted from +7V to +19V by replacing feedback resistors R1

<!-- image -->

## MAX8784 Evaluation Kit

and R2 (refer to the Design Procedure, Step-Up Regulator, Output Voltage Selection section in the MAX8784 data sheet). Operation at significantly higher output voltages may reduce the available output current and may require changes in component values or component voltage rating.

The step-up switching regulator's startup delay time is configured by replacing capacitor C9. Refer to the Power-Up Sequence section in the MAX8784 data sheet for additional details.

The gate-on (POUT) supply consists of a two-stage positive charge pump that generates +28V and provides greater than 50mA. This output can be adjusted from approximately +AVDD to nearly +3xAVDD by replacing  feedback resistors R3 and R4 (refer to the Design Procedure, Charge-Pump Regulators, Output Voltage Selection section in the MAX8784 data sheet).

The positive charge-pump regulator's startup delay time is configured by replacing capacitor C8. Refer to the Positive Charge-Pump Regulators  and Power-Up Sequence sections in the MAX8784 data sheet for additional details.

The VGOFF supply consists of a negative charge pump that generates -9V and provides greater than 50mA. This output can be adjusted from approximately 0V to -AVDD by replacing feedback resistors R5 and R6 (refer to the Design Procedure, Charge-Pump Regulator, Output Voltage Selection section in the MAX8784 data sheet).

The MAX8784 provides three high-current op amps that can each source or sink 180mA. The outputs of the amplifiers are configured for +7V (AVDD/2).

The MAX8784 contains two high-voltage switches that operate in a complementary fashion. One of the switches provides a connection between the POUT and GON pins. The other switch provides a connection between the GON and DRN pins. The switches can be controlled by an external TTL logic signal connected to the CTL pad.

When CTL is high, GON is connected to POUT, charging VGON to the voltage of the positive charge pump at the POUT pad. When CTL is low, GON is connected to DRN, allowing VGON to discharge toward AVDD (through resistor R19 and jumper JU3), or toward PGND (through resistor R19 and jumper JU3). The MAX8784 EV kit also features a capacitive dummy load of 1500pF (C17) at the VGON output pad that can be connected through jumper JU4 to simulate a panel load to test the switch matrix.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8784 Evaluation Kit

The MAX8784 features a HVS mode that can increase the output voltages of the step-up switching regulator and the positive charge pump to stress test the display panel during production. The step-up switching-regulator's output is  increased to +17V in HVS mode, set by resistor R21 (refer to the HVS Mode section in the MAX8784 data sheet). The positive charge-pump output is set to +30V in HVS mode and is not adjustable.

## Jumper Selection

## Shutdown Mode (SHDN)

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX8784 IC. The shutdown pin can also be controlled by an external logic controller connected to the EV kit's SHDN pad. Remove the shunt from jumper JU1 before connecting an external controller to the SHDN pad. See Table 1 for shunt positions.

## Table 1. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION                                         | SHDN PIN CONNECTED TO      | EV KIT FUNCTION                                               |
|--------------------------------------------------------|----------------------------|---------------------------------------------------------------|
| Installed*                                             | VIN                        | Enabled                                                       |
| Not installed                                          | GND (through resistor R17) | Shutdown mode                                                 |
| None (external logic controller connected to SHDN pad) | External logic controller  | SHDN driven by external logic controller. SHDN is active-low. |

Table 2. JU2 Jumper Selection (CTL)

| SHUNT POSITION                                        | CTL PIN CONNECTED TO       | HIGH-VOLTAGE SWITCH CONFIGURATION                                                                                     |
|-------------------------------------------------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Installed                                             | VIN                        | GON pin connected to POUT pin GON pin disconnected from DRN pin                                                       |
| Not installed*                                        | GND (through resistor R18) | GON pin connected to DRN pin GON pin disconnected from POUT pin                                                       |
| None (external logic controller connected to CTL pad) | External logic controller  | CTL driven by external logic controller CTL high: GON pin connected to POUT pin CTL low: GON pin connected to DRN pin |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-Voltage Switch Control (CTL)

Jumper JU2 configures the setting of the high-voltage switch control pin (CTL) of the MAX8784 IC. The CTL pin can also be controlled by an external logic controller connected to the EV kit's CTL pad. Remove the shunt from jumper JU2 before connecting an external controller to the CTL pad. See Table 2 for shunt positions.

## VGON Discharge Path (DRN)

The MAX8784 EV kit features a method to configure the VGON discharge path using resistor R19 and jumper JU3. When CTL is low, GON connects to DRN, allowing VGON to discharge through R19. R19 can be connected to AVDD or to PGND using jumper JU3. Table 3 lists the  selectable  JU3 jumper options. If VGON's desired lower level is greater than AVDD, discharge VGON toward AVDD to save power. VGON's discharge rate can be adjusted by selecting a different value for R19.

Table 3. JU3 Jumper Selection (DRN)

| SHUNT POSITION   | DRN PIN CONNECTED TO        | GON DISCHARGE TOWARD   |
|------------------|-----------------------------|------------------------|
| 1-2*             | AVDD (through resistor R19) | AVDD                   |
| 2-3              | PGND (through resistor R19) | PGND                   |

<!-- image -->

## Dummy Load for the High-Voltage Switch Output (VGON)

The MAX8784 EV kit features a capacitive dummy load of 1500pF (C17) at the VGON output pad to simulate a panel load to test the switch matrix. When testing with an LCD panel, disconnect the dummy load. Jumper JU4 connects and disconnects the dummy load. Table 4 lists the selectable JU4 jumper options.

## Table 4. JU4 Jumper Selection (Dummy Load)

| SHUNT POSITION   | VGON                 | EV KIT FUNCTION   |
|------------------|----------------------|-------------------|
| Installed        | Connected to C17     | Testing mode      |
| Not installed*   | Not connected to C17 | Normal operation  |

## High-Voltage Stress Mode (HVS)

The MAX8784 EV kit features an option to increase the output voltage of the step-up switching regulator and the positive charge pump, to stress test the display panel during production. Since the op-amp inputs are derived from the step-up converter output (AVDD), their output voltages increase when AVDD increases. Jumper JU5 selects the high-voltage-stress mode for the  MAX8784.  Table  5  lists  the  selectable  JU5 jumper options.

Table 5. JU5 Jumper Selection (HVS)

| SHUNT POSITION   | HVS PIN CONNECTED TO       | OPERATING MODE            |
|------------------|----------------------------|---------------------------|
| Installed        | VIN                        | High-voltage- stress mode |
| Not installed*   | GND (through resistor R13) | Normal mode               |

<!-- image -->

## MAX8784 Evaluation Kit

## Output Voltage Selection

## Step-Up Switching Regulator Output Voltage (AVDD)

The MAX8784 EV kit's step-up switching-regulator output (AVDD) is set to +14V by feedback resistors R1 and R2. To generate output voltages other than +14V (from +7V to +19V), select different voltage-divider resistors.  Operation at significantly  higher  output  voltages may reduce the available output current and may require changes in component values or voltage rating for  capacitors  C3  and  C4.  Refer  to  the Design Procedure, Step-Up Regulator, Output Voltage Selection section in the MAX8784 data sheet for instructions on selecting resistors R1 and R2.

## Positive Charge-Pump Output (POUT)

The positive charge-pump output (POUT) is set to +28V by voltage-divider resistors R3 and R4. To set POUT to other voltages (up to nearly +3xAVDD, limited to +35V) select different voltage-divider resistors. Refer to the Design Procedure, Charge-Pump Regulator, Output Voltage Selection section in the MAX8784 data sheet for instructions on selecting resistors R3 and R4.

## Negative Charge-Pump Output (VGOFF)

The negative charge-pump output (VGOFF) is set to -9V by voltage-divider resistors R5 and R6. To set VGOFF to other voltages (from 0V to nearly -AVDD), select different voltage-divider resistors. Refer to the Design Procedure, Charge-Pump Regulator, Output Voltage Selection section in the MAX8784 data sheet for instructions on selecting resistors R5 and R6.

Op-Amp Outputs (OUT1, OUT2, and OUT3) The op-amp outputs (OUT1, OUT2, and OUT3) are set to +7V by voltage-divider resistors R7-R12. To set the outputs to other voltages (from 0V to AVDD), select different voltage-divider resistors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8784 Evaluation Kit

Figure 1. MAX8784 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8784 Evaluation Kit

<!-- image -->

Figure 2. MAX8784 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8784 Evaluation Kit

Figure 3. MAX8784 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8784 Evaluation Kit

<!-- image -->

Figure 4. MAX8784 EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8784 Evaluation Kit

Figure 5. MAX8784 EV Kit PCB Layout-Power Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8784 Evaluation Kit

Figure 6. MAX8784 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11
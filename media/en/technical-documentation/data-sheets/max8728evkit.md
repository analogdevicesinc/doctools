<!-- lastmod 2022-08-03 -->
## General Description

The MAX8728 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides the voltages and features required for active-matrix thin-film transistor (TFT), liquid-crystal display (LCD) panels in LCD monitors and LCD TVs. The EV kit contains a stepdown switching regulator, a step-up switching regulator, a positive two-stage charge pump for the TFT gate-on supply, and a negative single-stage charge pump for the TFT gate-off supply. Also included is a logic-controlled,  high-voltage switch with adjustable delay, and a capacitive dummy load at the gate-on supply for ease of testing.

The EV kit, as configured, provides the following outputs from a +10VDC to +13.2VDC power supply. The step-down switching regulator is configured for a +3.3V output, providing at least 2A. The step-up switching regulator is configured for a +13.5V output, providing at least  500mA. The positive charge pump is configured for a +28V output, providing at least 50mA. The negative charge pump is configured for a -6V output, providing at least 150mA. The high-voltage switch can be controlled by external logic and can be configured for a delay set by an external capacitor.

The MAX8728 switches at 1.5MHz, allowing the use of tiny  surface-mount components. The EV kit can also operate at a lower frequency with component changes. The MAX8728 TQFN package (0.8mm maximum height) with low-profile external components allows this circuit to be less than 2mm high.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1            |     1 | 1µF ± 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K     |
| C2, C13       |     2 | 0.22µF ± 20%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C224M |
| C3-C7         |     5 | 10µF ± 20%, 16V X5R ceramic capacitors (1206) TDK C3216X5R1C106M   |
| C8            |     1 | 0.01µF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H103K  |
| C9            |     1 | 22µF ± 20%, 6.3V X7R ceramic capacitor (1206) TDK C3216X7R0J226M   |

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                       |
|------------------------|-------|-------------------------------------------------------------------|
| C10, C11, C14, C19-C22 |     7 | 0.1µF ± 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K |
| C12                    |     1 | 47pF ± 5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H470J    |
| C15                    |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M  |
| C16                    |     1 | 100pF ± 5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H101J   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Configured for +10V to +13.2V Input Range
- ♦ Output Voltages
- +3.3V Output at 2A (Step-Down Switching Regulator)
- +13.5V Output at 500mA (Step-Up Switching Regulator)
- +28V Output at 50mA (Positive Charge Pump)
- -6V Output at 150mA (Negative Charge Pump)
- ♦ Resistor-Adjustable Switching Regulator and Charge-Pump Output Voltages
- ♦ Logic-Controlled, High-Voltage Switch with Adjustable Delay
- ♦ Selectable 500kHz/1MHz/1.5MHz Switching Frequency
- ♦ 180° Out-of-Phase Switching
- ♦ Low-Profile, Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX8728EVKIT | 0°C to +70°C* | 32 TQFN-EP** |

## MAX8728 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C17           |     1 | 220pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H221K             |
| C18           |     1 | 1µF ± 10%, 50V X7R ceramic capacitor (1206) TDK C3216X7R1H105K               |
| C23           |     1 | 1500pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H152K            |
| C24           |     1 | 1000pF ± 5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H102J             |
| C25, C26      |     0 | Not installed, capacitors (1206)                                             |
| C27           |     0 | Not installed, capacitor (0603)                                              |
| C28           |     1 | 10pF ± 5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H100J               |
| D1, D2        |     2 | 3A, 30V Schottky diodes (M-flat) Toshiba CMS02                               |
| D3            |     1 | 250mA, 75V high-speed silicon diode (SOD-523) Central Semiconductor CMOD4448 |
| D4, D5, D6    |     3 | 220mA, 100V dual diodes (SOT23) Fairchild MMBD4148SE                         |
| JU1, JU3      |     2 | 2-pin headers                                                                |
| JU2, JU4, JU5 |     3 | 3-pin headers                                                                |

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| JU6           |     0 | Not installed three-way jumper (four pins)                     |
| L1            |     1 | 6.4µH, 1.5ADC inductor Sumida CDRH6D12-6R4                     |
| L2            |     1 | 2.6µH, 2.6ADC inductor Sumida CDRH6D12-2R6                     |
| P1            |     1 | 2.4A, -20V p-channel MOSFET (3-pin SuperSOT) Fairchild FDN304P |
| R1            |     1 | 6.49k Ω ± 1% resistor (0805)                                   |
| R2, R16       |     2 | 10k Ω ± 1% resistors (0805)                                    |
| R3, R10       |     2 | 100k Ω ± 5% resistors (0805)                                   |
| R4            |     1 | 10 Ω ± 5% resistor (0805)                                      |
| R5            |     1 | 44.2k Ω ± 1% resistor (0805)                                   |
| R6            |     1 | 158k Ω ± 1% resistor (0805)                                    |
| R7            |     1 | 115k Ω ± 1% resistor (0805)                                    |
| R8            |     1 | 20k Ω ± 1% resistor (0805)                                     |
| R9            |     1 | 160k Ω ± 5% resistor (0805)                                    |
| R11           |     1 | 127k Ω ± 1% resistor (0805)                                    |
| R12, R15      |     2 | 22.1k Ω ± 1% resistors (0805)                                  |
| R13           |     1 | 2k Ω ± 5% resistor (0805)                                      |
| R14           |     1 | 287k Ω ± 1% resistor (0805)                                    |
| U1            |     1 | MAX8728ETJ+ (32-pin TQFN-EP 5mm x 5mm x 0.8mm)                 |
| -             |     5 | Shunts                                                         |
| -             |     1 | MAX8728 EV kit PC board                                        |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | www.centralsemi.com   |
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| Sumida                  | 847-545-6700 | www.sumida.com        |
| TDK                     | 847-803-6100 | www.component.tdk.com |
| Toshiba                 | 949-455-2000 | www.toshiba.com/taec  |

Note:

Indicate that you are using the MAX8728 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Recommended Equipment

- +10V to +13.2V, 2A DC power supply
- One voltmeter

The MAX8728 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  a  shunt  is  installed  across  jumper  JU1 (EV kit ON).
- 2) Verify that a shunt is installed across pins 1 and 2 of jumper JU2 (enables step-up, charge pumps, and switch-control block).
- 3) Verify that no shunt is installed across jumper JU3 (no capacitive dummy load C23).
- 4) Verify that a shunt is installed across pins 1 and 2 of jumper JU4 (VGON discharges toward AVDD).
- 5) Verify that a shunt is installed across pins 1 and 2 of jumper JU5 (high-voltage, switch-control block set to mode 1).
- 6) Preset the power supply to +12V and disable the output.
- 7) Connect the positive terminal of the power supply to the VIN pad on the EV kit. Connect the negative terminal of the power supply to the PGND pad next to the VIN pad.
- 8) Turn on the power supply.
- 9) Verify that the step-down switching regulator output (OUT1) is +3.3V.
- 10) Verify  that  the  step-up  switching  regulator  output (AVDD) is +13.5V.
- 11) Verify that the gate-on supply (VSRC) is +28V.
- 12) Verify that the gate-off supply (VGOFF) is -6V.

## Detailed Description

The MAX8728 EV kit contains a step-down switching regulator, a step-up switching regulator, a positive twostage charge pump, a negative single-stage charge pump, and a high-voltage switch matrix. The MAX8728 switching frequency is configured for 1.5MHz. The EV kit  is  configured  to  operate  from  a  +10VDC  to +13.2VDC power supply that can provide at least 2A.

Operation below +10V (down to +7V) is possible, but requires changes in component values, charge-pump configurations, output voltages and currents, or other parameters. Refer to the MAX8728 IC data sheet for additional information.

<!-- image -->

## MAX8728 Evaluation Kit

The EV kit is configured for a 1.5MHz switching frequency. Operation at 500kHz or 1MHz is possible, but requires component changes. See the Switching Frequency Selection (FSEL ) section.

As configured, the step-down switching regulator (OUT1) generates a +3.3V output and can provide at least 2A. The step-down switching-regulator output voltage can be adjusted from 2V to 3.6V by replacing feedback resistors R1 and R2. Refer to the Detailed Description, Step-Down Regulator section in the MAX8728 data sheet.

The step-up switching regulator (AVDD) generates a +13.5V output and can provide at least 500mA. The step-up switching-regulator output voltage can be adjusted from VIN to +28V by replacing feedback resistors  R7  and R8. Refer to the Design Procedure, StepUp Regulator Design, Output-Voltage Selection section in  the  MAX8728 data sheet. Operation at significantly higher output voltages can reduce the available output current, and may require changes in component values or component voltage ratings.

The gate-on (VSRC) supply consists of two positive charge-pump stages to generate +28V and can provide greater than 50mA. This output can be adjusted from approximately VIN to nearly 3 x VIN by replacing feedback resistors R14 and R15. Refer to the Design Procedure , Charge-Pump Regulators, Output-Voltage Selection section in the MAX8728 data sheet.

The positive charge-pump regulator's startup delay time can be adjusted by replacing capacitor C11. Refer to  the Positive  Charge-Pump Regulator and Power-Up Sequence sections in the MAX8728 data sheet for additional details.

The VGOFF supply consists of a single negative charge-pump stage to generate -6V and can provide greater than 150mA. This output can be adjusted from approximately 0 to -VIN by replacing feedback resistors R5 and R6. Refer to the Design Procedure, ChargePump Regulators, Output-Voltage Selection section in the MAX8728 data sheet.

The MAX8728 contains two high-voltage switches that operate in a complementary fashion. One of the switches provides a connection between the SRC and GON pins. The other switch provides a connection between the GON and DRN pins. Both switches can be controlled by an external TTL square-wave signal connected to the CTL pad.

When CTL is high, GON is connected to SRC, charging GON to the voltage of the positive charge pump at the VSRC pad. When CTL is low, GON may be connected to  DRN, allowing GON to discharge toward AVDD

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8728 Evaluation Kit

(through resistor R13, jumper JU4, and diode D3) or toward PGND (through resistor R13 and jumper JU4). However, GON stops discharging when the voltage at GON drops to 10 times the threshold voltage set at the THR pin. As configured, the voltage at the THR pin is set to 2V by voltage-divider resistors R11 and R12.

The high-voltage switches have two modes of operation controlled by jumper JU5. The first mode has no delay, while the second mode has an adjustable delay feature. In the first mode, GON is switched to SRC at the rising edge of the control signal connected to the CTL pad, and then switched to DRN at the falling edge of the control signal. In the second mode, GON is switched to SRC at the rising edge of the control signal. However, at the falling edge of the control signal, GON is  not  switched  to  DRN  until  the  voltage  at  the  MODE pin  reaches  0.5  x  VREF.  Refer  to  the Detailed Description, High-Voltage Switch Control section in the MAX8728 data sheet for additional details.

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX8728 IC. The shutdown pin can also be controlled by an external logic controller connected to the EV kit SHDN pad. Remove the shunt from jumper JU1 before connecting an external controller to the SHDN pad. See Table 1 for shunt positions.

## Enable Input (EN)

The MAX8728 EV kit features an enable input (EN). When EN is low, the step-up regulator, the positive charge-pump regulator, the negative charge-pump regulator,  and the high-voltage switch matrix are disabled

Table 2. Jumper JU2 Functions (EN)

| SHUNT LOCATION                                                | EN PIN CONNECTED TO                 | DELAY      | EV KIT'S STEP-DOWN REGULATOR            | EV KIT'S STEP-UP REGULATOR, POSITIVE AND NEGATIVE CHARGE- PUMP REGULATORS, HIGH-VOLTAGE SWITCH   |
|---------------------------------------------------------------|-------------------------------------|------------|-----------------------------------------|--------------------------------------------------------------------------------------------------|
| 1-2 (default)                                                 | C10                                 | Set by C10 | Fixed-frequency mode (after delay)      | Enabled (after delay)                                                                            |
| 2-3                                                           | GND                                 | -          | Skip mode                               | Disabled                                                                                         |
| Not installed                                                 | Unconnected; pulled high internally | No delay   | Fixed-frequency mode                    | Enabled                                                                                          |
| Not installed (external logic controller connected to EN pad) | External logic controller           | No delay   | Controlled by external logic controller | Controlled by external logic controller                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 1. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION                                                  | SHDN PIN CONNECTED TO     | EV KIT FUNCTION                                                  |
|-----------------------------------------------------------------|---------------------------|------------------------------------------------------------------|
| Installed (default)                                             | VL                        | Enabled                                                          |
| Not installed                                                   | GND (through resistor R3) | Shutdown mode                                                    |
| Not installed (external logic controller connected to SHDN pad) | External logic controller | SHDN driven by external logic controller, shutdown is active low |

and the step-down regulator operates in its power-saving skip mode.

On the rising edge of EN, the step-down regulator enters its fixed-frequency mode, and the step-up, charge pumps and switch matrix begin their startup sequence (refer to the Power-Up Sequence section in the MAX8728 IC data sheet).

The EN pin includes a 5µA current source, which, together with capacitor C10 from EN to ground, can provide a startup delay for the above blocks.

Jumper JU2 controls the enable pin (EN) of the MAX8728 IC. The enable pin can also be controlled by an external logic controller connected to the EV kit's EN pad. Remove the shunt from jumper JU2 before connecting an external controller to the EN pad. See Table 2 for shunt positions.

## Dummy Load for the High-Voltage Switch Output (VGON)

The MAX8728 EV kit features a capacitive dummy load of 1500pF (C23) at the VGON output pad to simulate a panel load to test the switch matrix. Jumper JU3 selects and deselects the dummy load. Table 3 lists jumper JU3 options.

## Table 3. Jumper JU3 Functions (LOAD)

| SHUNT LOCATION          | DUMMY LOAD (C23)   | EV KIT FUNCTION               |
|-------------------------|--------------------|-------------------------------|
| Installed               | Connected to VGON  | Testing mode (no panel)       |
| Not installed (default) | Unconnected        | Normal operation (panel load) |

## VGON Discharge Path

The MAX8728 EV kit features a method to configure the VGON discharge path using resistor R13 and jumper JU4. When CTL is low, GON may be connected to DRN, allowing VGON to discharge through resistor R13. R13 can be connected to AVDD (through diode D3) or to PGND using jumper JU4. Table 4 lists the selectable JU4 jumper options. If VGON's desired lower level is greater than AVDD, discharge VGON toward AVDD to save power. The VGON's discharge rate can be adjusted by selecting a different value for R13.

## Table 4. Jumper JU4 Functions (VGON Discharge)

| SHUNT LOCATION   | DRN PIN CONNECTED TO                   | VGON DISCHARGED TOWARD   |
|------------------|----------------------------------------|--------------------------|
| 1-2 (default)    | AVDD through resistor R13 and diode D3 | AVDD                     |
| 2-3              | PGND through resistor R13              | PGND                     |

## High-Voltage Switch Mode (MODE)

The MAX8728 EV kit features an option to select the operating mode (delay or no delay) for the high-voltage switches, on the rising edge of the CTL pin, GON connects to SRC. On CTL's falling edge, GON may connect immediately to DRN (no delay), or GON may connect to DRN after a delay set by C17. Jumper JU5 selects the high-voltage switch operating mode for the MAX8728. Table 5 lists the selectable JU5 jumper options.

<!-- image -->

## MAX8728 Evaluation Kit

## Table 5. Jumper JU5 Functions (MODE)

| SHUNT LOCATION   | MODE PIN CONNECTED TO      | HIGH-VOLTAGE SWITCH MODE   |
|------------------|----------------------------|----------------------------|
| 1-2 (default)    | REF (through resistor R16) | No delay                   |
| 2-3              | C17                        | Delay set by C17           |
| Not installed    | Unconnected                | Not allowed                |

## Switching Frequency Selection (FSEL)

The step-down and step-up regulators on the MAX8728 EV kit switch at the same frequency, but are 180 degrees out-of-phase with each other. The MAX8728 switching frequency is selectable among 1.5MHz, 1MHz, and 500kHz by jumper JU6. Table 6 lists the selectable JU6 jumper options.

## Table 6. Jumper JU6 Functions (FSEL)

| SHORT LOCATION         | FSEL PIN CONNECTED TO   | EV KIT FREQUENCY   |
|------------------------|-------------------------|--------------------|
| 1-4 (shorted, default) | GND                     | 1.5MHz             |
| 1-3                    | REF                     | 500kHz             |
| 1-2                    | VL                      | 1MHz               |

Note that jumper JU6 is not installed and is shorted between pin holes 1 and 4 by a PC board trace. To utilize jumper JU6, cut open the PC board trace between pin holes 1 and 4, and install a shorting wire between pin holes 1 and 2 for 1MHz operation, or pin holes 1 and 3 for 500kHz operation.

The EV kit is configured for 1.5MHz operation. Optimum performance at lower frequencies requires larger inductor values. Refer to the Step-Down Regulator Design and Step-Up Regulator Design section in the MAX8728 data sheet.

## Output Voltage Selection

## Step-Down Switching-Regulator Output Voltage (OUT1)

The MAX8728 EV kit's step-down switching regulator's output (OUT1) is set to +3.3V by feedback resistors R1 and R2. To generate output voltages other than +3.3V (from 2V to 3.6V), select different external voltagedivider resistors, R1 and R2. Refer to the Detailed Description, Step-Down Regulator section in the MAX8728 data sheet for instructions on selecting resistors R1 and R2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8728 Evaluation Kit

## Step-Up Switching-Regulator Output Voltage (AVDD)

The MAX8728 EV kit's step-up switching-regulator output (AVDD) is set to +13.5V by feedback resistors R7 and R8. To generate output voltages other than +13.5V (from VIN to 28V), select different external voltagedivider resistors. Refer to the Design Procedure, StepUp Regulator Design, Output Voltage Selection section in the MAX8728 data sheet for instructions on selecting resistors R7 and R8.

## Positive Charge-Pump Output (VSRC)

The positive charge-pump output (VSRC) is set to +28V by voltage-divider resistors R14 and R15. To set VSRC to other voltages (up to approximately 3 x VIN), select different  divider  resistors.  Refer  to  the Design Procedure, Charge-Pump Regulators, Output-Voltage Selection section in the MAX8728 data sheet for instructions on selecting resistors R14 and R15.

## Negative Charge-Pump Output (VGOFF)

The negative charge-pump output (VGOFF) is set to -6V by voltage-divider resistors R5 and R6. To set VGOFF to other voltages (from 0V to -VIN), select different divider resistors. Refer to the Design Procedure, Charge-Pump Regulators, Output-Voltage Selection section in the MAX8728 data sheet for instructions on selecting resistors R5 and R6.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8728 Evaluation Kit

Figure 1.  MAX8728 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8728 Evaluation Kit

<!-- image -->

Figure 2. MAX8728 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8728 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8728 EV Kit PC Board Layout-PGND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX8728 EV Kit PC Board Layout-VIN Layer 3

<!-- image -->

## MAX8728 Evaluation Kit

Figure 6. MAX8728 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Freed

9
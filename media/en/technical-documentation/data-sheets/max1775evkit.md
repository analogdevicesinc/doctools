<!-- lastmod 2022-08-02 -->
## General Description

The MAX1775 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a dual step-down switching regulator circuit. The circuit is configured for a main output voltage of +3.3V and a core output voltage of +1.8V. The main output provides up to 1.5A, and the core provides up to 500mA of current.

Power for the circuit can be provided from a +2.7V to +5.5V DC source. The EV kit can be reconfigured for input voltages up to +28V. The core's input can be powered from the input source or, for higher input voltages, from the main output.

The MAX1775 EV kit demonstrates low quiescent current and high efficiency up to 95% for maximum battery life. Operation up to 1.25MHz allows the use of tiny surface-mount components.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                               |
|---------------|-------|-----------------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 25V X5R ceramic capacitor (1812) Taiyo YudenTMK432BJ106KM                                           |
| C2, C5        |     2 | 1µF, 25V X7R ceramic capacitors (1206) Taiyo Yuden TMK316BJ105KL                                          |
| C3            |     1 | 47µF, 6.3V low-ESR electrolytic capacitor (POSCAP) Sanyo 6TPA47M                                          |
| C4            |     1 | 47µF ±20%, 6.3V tantalum capacitor (C) Sprague-Vishay 592D476X06R3C2T or AVX TPSC476M016R0350 recommended |
| C6            |     1 | 0.22µF, 25V X7R ceramic capacitor (1206) Taiyo Yuden TMK316BJ224KF                                        |
| C7, C8        |     2 | 10µF, 6.3V X5R ceramic capacitors (1206) Taiyo Yuden JMK316BJ106KL                                        |
| C9, C10       |     0 | Not installed, capacitors (0805)                                                                          |

- ♦ +2.7V to +5.5V Input Range
- ♦ Output Voltages
- +3.3V Output at 1.5A
- +1.8V Output at 500mA
- ♦ Outputs are Adjustable with Resistors
- ♦ Internal MOSFET Switches (Core Output)
- ♦ 5µA (typ) IC Shutdown Current
- ♦ Switching Frequency Up to 1.25MHz
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1775EVKIT | 0°C to +70°C  | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| D1            |     0 | Not installed, Schottky diode Nihon EC31QS04 optional                           |
| L1            |     1 | 5.0µH, 2.4A inductor Sumida CDRH6D28-5R0NC                                      |
| L2            |     1 | 5.4µH, 1.6A inductor Sumida CDRH5D18-5R4NC                                      |
| P1A/P1B       |     1 | +30V/-20V, 5.5A/4.0A N/P-channel MOSFET (SO-8) Fairchild Semiconductor FDS8928A |
| R1            |     1 | 24.3k Ω ± 1% resistor (0805)                                                    |
| R2            |     1 | 30.1k Ω ± 1% resistor (0805)                                                    |
| R3            |     1 | 0.033 Ω ±1%, 0.5W resistor (2010) DaleWSL-2010-R033-1%                          |
| R4            |     1 | 66.5k Ω ± 1% resistor (0805)                                                    |
| R5            |     1 | 40.2k Ω ± 1% resistor (0805)                                                    |
| U1            |     1 | MAX1775EEE (16 QSOP)                                                            |
| JU1, JU2      |     2 | 3-pin headers                                                                   |
| None          |     2 | Shunts (JU1, JU2)                                                               |
| None          |     1 | MAX1775 PC board                                                                |
| None          |     1 | MAX1775 data sheet                                                              |
| None          |     1 | MAX1775 EV kit data sheet                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

## MAX1775 Evaluation Kit

## Component Suppliers

| SUPPLIER       | PHONE        | FAX          |
|----------------|--------------|--------------|
| AVX            | 803-946-0690 | 803-626-3123 |
| Dale-Vishay    | 402-564-3131 | 402-563-6418 |
| Fairchild      | 408-822-2000 | 408-822-2102 |
| Nihon USA      | 661-867-2555 | 661-867-2698 |
| Sanyo USA      | 619-661-6835 | 619-661-1055 |
| Sprague-Vishay | 603-224-1961 | 603-224-1430 |
| Sumida         | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden    | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1775 when contacting these component suppliers.

## Quick Start

The MAX1775 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Outputs

- 1) Verify that shunts JU1 (SHDNM) and JU2 ( SHDNC ) are across pins 1 and 2.
- 2) Connect a voltmeter to the VMAIN pad.
- 3) Connect a +2.7V to +5.5V DC power supply to the VBATT pad. Connect the supply ground to the GND pad.
- 4) Turn on the power supply and verify that the main output (VMAIN) is +3.3V.
- 5) Verify that the core output (VCORE) is +1.8V.

For instructions on selecting the feedback resistors for other output voltages, refer to the Evaluating Other Output Voltages section.

## Detailed Description

The MAX1775 EV kit contains a dual step-down switching regulator. A +3.3V main output provides up to 1.5A, and a +1.8V core output provides up to 500mA of current.  The  EV  kit  operates  from  a  +2.7V  to  +5.5V  input voltage range. The EV kit can be reconfigured for input voltages up to +28V refer to the Evaluating High Input Voltage Operation section.

The MAX1775 EV kit features several jumper-selectable options. Shutdown mode jumpers that reduce the MAX1775 shutdown current to &lt; 5µA (typ) are provided for the main and core outputs. Another option enables the main output (VMAIN) or an external voltage source to feed power to the core input.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The step-down switching regulator main output voltage can be adjusted from +2.5V to +5.5V, and the core output voltage can be adjusted from +1V to +5V with resistors.

## Jumper Selection

## Shutdown Mode (Main Output)

The MAX1775 EV kit features a shutdown mode that reduces the MAX1775 shutdown current to &lt; 5µA (typ), which preserves battery life. The 3-pin jumper, JU1, selects the shutdown mode for the MAX1775 main output (VMAIN). Table 1 lists the selectable jumper options.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDNM PIN          | MAX1775 OUTPUT                 |
|------------------|--------------------|--------------------------------|
| 1 and 2          | Connected to VBATT | MAX1775 enabled, VMAIN = +3.3V |
| 2 and 3          | Connected to GND   | Shutdown mode, VMAIN = 0       |

## Shutdown Mode (Core Output)

The MAX1775 EV kit features a core shutdown mode that  reduces the MAX1775 shutdown current, which preserves battery life. The 3-pin jumper, JU2, selects the shutdown mode for the MAX1775 core output (VCORE). Table 2 lists the selectable jumper options.

## Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | SHDNC PIN        | MAX1775 OUTPUT                    |
|------------------|------------------|-----------------------------------|
| 1 and 2          | Connected to CVL | COREoutput enabled, VCORE = +1.8V |
| 2 and 3          | Connected to GND | Shutdown mode, VCORE = 0          |

## Core Input Supply

The MAX1775 EV kit features an option that allows the main output voltage source to power the core's input. Jumper JU3 selects which voltage source feeds the core's input. Table 3 lists the jumper options.

<!-- image -->

## Table 3. Jumper JU3 Functions

| PIN-HOLE TRACE                                          | INC PIN                            | OPERATING MODE                        |
|---------------------------------------------------------|------------------------------------|---------------------------------------|
| 1 and 2 (PC trace shorts 1 and 2)                       | Connected to VBATT                 | VBATT voltage source feeds core input |
| Short 2 and 3 (Cut open trace across pin holes 1 and 2) | Connected to VMAIN (core cascaded) | VMAIN voltage source feeds core input |

## Evaluating Other Output Voltages

## MAIN Output

The MAX1775 EV kit's step-down switching regulator main output (VMAIN) is set to +3.3V by feedback resistors  (R4,  R5).  To  generate  output  voltages  other  than +3.3V (+2.5V to +5V), select different voltage-divider resistors (R4, R5). Refer to the Setting the Output Voltages section in the MAX1775 data sheet for instructions on selecting the resistors.

## CORE Output

The MAX1775 EV kit's step-down switching regulator core output (VCORE) is set to +1.8V by feedback resistors  (R1,  R2).  To  generate  output  voltages  other  than +1.8V (+1V to +5V), select different voltage-divider resistors (R1, R2). Refer to the Setting the Output Voltages section in the MAX1775 data sheet for instructions on selecting the resistors.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1775 Evaluation Kit

## Evaluating High Input Voltage Operation

## Core Input

The MAX1775 EV kit is factory-set for both step-down switching regulators, deriving their power from the input voltage (VBATT). The input to the core regulator is limited to +5V. A cascaded configuration must be used for input voltages greater than +5V. (The core converter derives its power from the main output voltage.) To configure the MAX1775 EV kit cascaded, cut open the PC board trace, shorting pinholes 1 and 2 at jumper JU3. Place a short (soldered jumper wire) across pinholes 2 and 3 at jumper JU3. Consult Table 3 for input voltage jumper selection.

## MAX1775 Evaluation Kit

Figure 1. MAX1775 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1775 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1775 Evaluation Kit

Figure 3. MAX1775 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1775 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
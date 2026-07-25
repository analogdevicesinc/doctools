<!-- lastmod 2022-08-02 -->
## General Description

The MAX1774 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a dual step-down switching converter with a backup converter circuit and low-voltage detectors. The circuit is configured for a main output voltage of 3.3V and a core output voltage of 1.8V. The main output provides up to 1.5A, and the core output provides up to 500mA of current.

Power for the circuit can be provided from a 3.65V to 5.5V DC source. The EV kit can be reconfigured for input voltages up to 28V. The core's input can be powered from the input source, or for higher input voltages, from the main output. The EV kit circuit includes battery monitoring, switchover, and backup, allowing automatic backup operation.

The MAX1774 EV kit demonstrates low quiescent current and high efficiency (up to 95%) for maximum battery life. Operation up to 1.25MHz allows the use of tiny surfacemount components.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1, C11, C14  |     0 | Not installed (0805)                                                                     |
| C2, C8        |     2 | 10µF, 25V X5R ceramic capacitors (1812) Taiyo Yuden TMK432BJ106KM                        |
| C3            |     1 | 47µF, 6.3V low-ESR electrolytic capacitor (POSCAP) Sanyo 6TPA47M                         |
| C4            |     1 | 47µF, 6.3V tantalum capacitor (C) AVX TPSC476M016R0350 or Sprague-Vishay 592D476X06R3C2T |
| C5, C10, C13  |     3 | 10µF, 6.3V X5R ceramic capacitors (1206)                                                 |
| C6, C7        |     2 | 1µF, 25V X7R ceramic capacitors (1206)                                                   |
| C9            |     1 | 0.22µF, 25V X7R ceramic capacitor (1206) Taiyo Yuden TMK316BJ224KF                       |
| C12           |     1 | 100pF, 50V, NPO ceramic capacitor (0805)                                                 |
| D1            |     1 | 3A, 100V diode Nihon NSD03A10                                                            |
| D2            |     1 | 0.5A, 30V Schottky diode Nihon EP05Q03L                                                  |

Component List continues on next page.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ Input Voltages
- +3.65V to +5.5V (AC Adapter, as configured)
- +2.7V to +5.5V (Main Battery, as configured)
- +0.9V to +3.2V (Backup Battery)
- ♦ Output Voltages
- +3.3V Output at 1.5A
- +1.8V Output at 500mA
- ♦ Outputs are Adjustable with Resistors
- ♦ Internal MOSFET Switches (Core and Backup Converters)
- ♦ 8µA (typ) IC Shutdown Current
- ♦ Switching Frequency up to 1.25MHz
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE           |
|--------------|---------------|----------------------|
| MAX1774EVKIT | 0°C to +70°C  | 32-Pin 7mm ✕ 7mm QFN |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 803-996-0690 | 803-626-3123 |
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Dale-Vishay           | 402-564-3131 | 402-563-6418 |
| Fairchild             | 408-822-2000 | 408-822-2102 |
| Nihon USA             | 661-867-2555 | 661-867-2698 |
| Sanyo USA             | 619-661-6835 | 619-661-1055 |
| Sprague-Vishay        | 603-224-1961 | 603-224-1430 |
| Sumida                | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1774 when contacting these component suppliers.

1

## MAX1774 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| D3            |     0 | Not installed, (SOT-23) recommended Central Semiconductor CMPD914                |
| D4            |     0 | Not installed, (SOD-323) recommended Central Semiconductor CMDZ5248B             |
| L1            |     1 | 5.0µH, 2.4A inductor Sumida CDRH6D28-5R0NC                                       |
| L2            |     1 | 5.4µH, 1.6A inductor Sumida CDRH5D18-5R4NC                                       |
| L3            |     1 | 22µH, 700mA inductor Sumida CDRH4D28-220                                         |
| P1            |     1 | +30V/-20V, 5.5A/4.0A N/P- channel MOSFET (SO-8) Fairchild Semiconductor FDS8928A |
| P2            |     1 | -30V, 1.1A P-channel MOSFET (SuperSOT-3) Fairchild Semiconductor NDS356AP        |

## Quick Start

The MAX1774 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that shunts are across pins 1 and 2 of jumpers JU1 ( SHDNM ) and JU2 ( SHDNC ).
- 2) Connect a voltmeter to the VMAIN pad.
- 3) Connect a +3.65V to +5.5V DC power supply to the VIN\_AC pad. Connect the supply ground to the GND pad.
- 4) Connect a +3.4V to +5.5V DC power supply to the MAIN\_BATT pad. Connect the supply ground to the GND pad. Set this power supply +1V below the power-supply voltage connected to the VIN\_AC pad.
- 5) Turn on the VIN\_AC power supply, and then the MAIN\_BATT power supply.
- 6) Verify  that  the  main  output  (VMAIN)  is  +3.3V  and the core output (VCORE) is +1.8V.

## Component List (continued)

| DESIGNATION            |   QTY | DESCRIPTION                                            |
|------------------------|-------|--------------------------------------------------------|
| R1                     |     1 | 24.3k Ω ± 1% resistor (0805)                           |
| R2                     |     1 | 30.1k Ω ± 1% resistor (0805)                           |
| R3                     |     1 | 0.033 Ω , 0.5W ± 1% resistor (2010) Dale WSL-2010-R033 |
| R8                     |     1 | 255k Ω ± 1% resistor (0805)                            |
| R9                     |     1 | 22.6k Ω ± 1% resistor (0805)                           |
| R10                    |     1 | 200k Ω ± 1% resistor (0805)                            |
| R11, R13, R14 R15, R19 |     5 | 1M Ω ± 5% resistors (0805)                             |
| R17                    |     1 | 66.5k Ω ± 1% resistor (0805)                           |
| R18                    |     1 | 40.2k Ω ± 1% resistor (0805)                           |
| R4, R5, R12, R16       |     0 | Not installed (0805)                                   |
| U1                     |     1 | MAX1774EGJ (32-pin7mmx 7mmQFN)                         |
| JU1, JU2               |     2 | 3-pin headers                                          |
| None                   |     2 | Shunts (JU1, JU2)                                      |
| None                   |     1 | MAX1774 PC board                                       |
| None                   |     1 | MAX1774 data sheet                                     |
| None                   |     1 | MAX1774 EV kit data sheet                              |

- 7) Turn off the VIN\_AC power supply, and verify that the main output (VMAIN) is +3.3V and the core output (VCORE) is +1.8V.

For instructions on selecting the feedback resistors for other output voltages, see Evaluating Other Output Voltages .

## Detailed Description

The MAX1774 EV kit contains a dual step-down switching converter and backup converter. A +3.3V main output provides up to 1.5A, and a +1.8V core output provides up to 500mA of current. The EV kit operates from a  +2.7V to +5.5V input voltage range. See Evaluating High-Input-Voltage Operation to  reconfigure  the  EV  kit for input voltages up to +28V.

A backup step-up converter is designed into the circuit and only requires three components to be fully operational, supplying up to 20mA of current to the main output (VMAIN). When the backup converter is engaged, it regulates to the same voltage as VMAIN, and serves to backup the output (at a reduced load) during a deadbattery condition.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

The MAX1774 EV kit features several jumper-selectable options. Shutdown mode jumpers that reduce the MAX1774 shutdown current to less than 8µA (typ) are provided for the main and core outputs. Power to the core input can be fed from the main output (VMAIN) or an external voltage source. The available main output load current will be reduced by the amount of current drawn by the core converter (VCORE). Note that if the power to the core output comes from the main output, the core output will not be able to supply power when the main is disabled.

Low-voltage detector pads are provided on the EV kit for  low  AC-adapter voltage ( ACO ),  low-battery  output ( LBO ), and backup ( BKUP ) features.

The main step-down switching-converter output-voltage can be adjusted from +1.25V to +5.5V, and the core output voltage can be adjusted from +1V to +5V with resistors.

## Jumper Selection

## Shutdown Mode (Main Output)

The MAX1774 EV kit features a shutdown mode that reduces the MAX1774 shutdown current to less than 8µA (typ), preserving battery life. The 3-pin jumper (JU1) selects the MAX1774 shutdown mode. Table 1 lists the selectable jumper options.

## Shutdown Mode (Core Output)

The MAX1774 EV kit features a core shutdown mode that reduces the MAX1774 shutdown current, thus preserving battery life. The 3-pin jumper (JU2) selects the shutdown mode for the MAX1774 core output. Table 2 lists the selectable jumper options.

## Core Input Supply

The MAX1774 EV kit features an option to allow the main output to power the core's input. Jumper JU3 selects which voltage source feeds the core's input. Table 3 lists the jumper options.

## Evaluating Other Output Voltages

## MAIN Output

The MAX1774 EV kit's step-down switching converter main output (VMAIN) is set to +3.3V by feedback resistors (R17, R18). To generate output voltages other than +3.3V (+1.25V to +5.5V), select different voltage-divider resistors (R17, R18). Refer to the Setting the Output Voltages in the MAX1774 data sheet for instructions on selecting the resistors.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1774 Evaluation Kit

## Table 1. Jumper JU1 Function

| SHUNT LOCATION   | SHDNM PIN        | MAX1774 OUTPUT               |
|------------------|------------------|------------------------------|
| 1 and 2          | Connected to IN  | MAX1774enabled, VMAIN =+3.3V |
| 2 and 3          | Connected to GND | Shutdown mode, VMAIN = 0V    |

## Table 2. Jumper JU2 Function

| SHUNT LOCATION   | SHDNC PIN        | MAX1774 OUTPUT                  |
|------------------|------------------|---------------------------------|
| 1 and 2          | Connected to CVL | COREoutputenabled, VCORE =+1.8V |
| 2 and 3          | Connected to GND | Shutdown mode, VCORE = 0V       |

## Table 3. Jumper JU3 Functions

| PIN-HOLE TRACE                                            | INC PIN                            | OPERATING MODE                        |
|-----------------------------------------------------------|------------------------------------|---------------------------------------|
| 1 and 2 (PC trace shorts 1 and 2)                         | Connected to IN                    | IN voltage source feeds core input    |
| Shorts 2 and 3 (Cut open trace across pin-holes 1 and 2 ) | Connected to VMAIN (core cascaded) | VMAIN voltage source feeds core input |

## MAX1774 Evaluation Kit

## CORE Output

The MAX1774 EV kit's step-down switching converter core output (VCORE) is set to +1.8V by feedback resistors  (R1,  R2).  To  generate  output  voltages  other  than +1.8V (+1V to +5V), select different voltage-divider resistors (R1, R2). Refer to the Setting the Output Voltages in the MAX1774 data sheet for instructions on selecting the resistors.

## Evaluating High-Input-Voltage Operation

## Core Input

The MAX1774 EV kit is factory set so that both stepdown switching regulators derive their power from the input voltage (IN). Since the input to the core regulator is  limited  to  +5.5V,  a  cascaded configuration must be used for input voltages greater than +5.5V (the core converter derives its power from the main output voltage). To configure the MAX1774 EV kit cascaded, cut open the PC board trace shorting pin-holes 1 and 2 at jumper JU3. Place a short (soldered jumper wire) across pin-holes 2 and 3 at jumper JU3. Consult Table 3  for  input-voltage  jumper  selection.  In  this  configura- tion,  IN  voltage  is  limited  to  28V  and  the  main  output voltage may be set between +2.6V and +5.5V.

## Evaluating The Backup Converter

## Backup Converter Circuit

The MAX1774 EV kit features a backup converter utilizing a step-up converter to provide power (up to 20mA) to  the  main  output (VMAIN) when the main battery (MAIN\_BATT) is off and no AC  (VIN\_AC) is connected.

## Using A Rechargeable Backup Battery

The MAX1774 EV kit features a circuit to recharge the backup battery. To use this function, install D3 and resistor R12. Follow the battery manufacturer's guidelines for safely recharging the backup battery. To prevent overdischarge of the backup battery, install resistors R4 and R5. The battery discharge threshold voltage is 0.5V(1 + (R4 / R5)), with R5 being 100k Ω .  When the circuit is in backup mode and the backup battery discharges below the threshold, the circuit will shut down.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1774 Evaluation Kit

Figure 1. MAX1774 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX1774

## MAX1774 Evaluation Kit

<!-- image -->

Figure 2. MAX1774 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1774 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1774 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
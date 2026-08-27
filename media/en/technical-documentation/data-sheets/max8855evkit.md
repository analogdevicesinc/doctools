<!-- lastmod 2022-08-02 -->
## General Description

The MAX8855 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate the performance of the MAX8855. The device is a high-efficiency dual stepdown regulator. The EV kit is powered from a 2.35V to 3.6V DC supply.

The EV kit is capable of delivering 1.8V at 5A from output 1 and 1.2V at 5A from output 2. The device switching frequency is set to 1MHz and the two outputs switch 180 ° out-of-phase. High-efficiency, internal dual nMOS design keeps the board cool under heavy loads. The voltage-mode control architecture and the highbandwidth (&gt; 15MHz typ) voltage-error amplifier allow a type III compensation scheme to be utilized to achieve fast response under both line and load transients, and also allow for ceramic output capacitors.

Programmable soft-start reduces input inrush current. Two enable inputs allow the turning on/off of each output individually,  resulting  in  great  flexibility  for  system-level designs. A reference input facilitates output-voltage tracking applications.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8855EVKIT+ | EV Kit |

<!-- image -->

## MAX8855 Evaluation Kit

## Features

- ♦ 2.35V to 3.6V Input Supply Voltage Range
- ♦ 1.8V at 5A Output (Step-Down Regulator 1)
- ♦ 1.2V at 5A Output (Step-Down Regulator 2)
- ♦ 180° Out-of-Phase Operation Reduces Input Ripple Current
- ♦ All-Ceramic-Capacitor Design
- ♦ High Efficiency
- ♦ 27m Ω On-Resistance Internal MOSFETs
- ♦ Fully Protected Against Overcurrent, Short Circuit, and Overtemperature
- ♦ REFIN on One Channel for Tracking or External Reference
- ♦ Integrated Boost Diodes
- ♦ Programmable Switching Frequency from 0.5MHz to 2MHz
- ♦ Adjustable Outputs from 0.6V to (0.9 x VIN)
- ♦ Individual Enable Inputs and PWRGD Outputs
- ♦ Low-Cost Solution
- ♦ Fully Assembled and Tested

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX8855 when contacting these component suppliers.

| DESIGNATION                   |   QTY | DESCRIPTION                                                                            |
|-------------------------------|-------|----------------------------------------------------------------------------------------|
| C1, C23                       |     2 | 22µF ±20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J226M Murata GRM31CR60J226K |
| C2, C3, C4, C6, C16, C17, C20 |     7 | 0.1µF ±10%, 16V X7R ceramic capacitors (0402) TDK C1005X7R1C104K Murata GRM155R71C104K |
| C5                            |     1 | Not installed, capacitor                                                               |
| C12                           |     1 | 0.022µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E223K                      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C7            |     1 | 2200pF ±10%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H222K Murata GRM155R71H222K  |
| C8            |     1 | 0.22µF ±10%, 16V X5R ceramic capacitor (0402) TDK C1005X5R1C224K                        |
| C9, C15       |     2 | 680pF ±10%, 50V X7R ceramic capacitors (0402) TDK C1005X7R1H681K Murata GRM1555R71H681K |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8855 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C10, C14      |     2 | 47pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H470J Murata GRM1555C1H470J    |
| C11, C13      |     2 | 560pF ±10%, 50V X7R ceramic capacitors (0402) Murata GRM155R71H561K                     |
| C18, C19      |     2 | 47µF ±20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J476M Murata GRM31CR60J476K  |
| C21, C22      |     2 | 1000pF ±10%, 50V X7R ceramic capacitors (0402) TDK C1005X7R1H102K Murata GRM155R71H102K |
| FSYNC         |     0 | Not installed, BNC connector                                                            |
| JU1, JU3      |     2 | 3-pin headers                                                                           |
| JU2           |     1 | 2-pin header                                                                            |

## Quick Start

## Recommended Equipment

- MAX8855 EV kit
- Adjustable DC power supply capable of supplying 3.6V at up to 7A
- Two electronic loads capable of sinking 5A (e.g., HP 6060B)
- Two voltmeters (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Set the DC power supply in the 2.35V to 3.6V range and turn off the power supply.
- 2) Connect the positive lead of the power supply to the IN pad and the negative pad to the PGND pad of the EV kit.
- 3) Verify that JU1 and JU2 do not have a shunt installed.
- 4) Verify that a shunt is across pins 1 and 2 of jumper JU3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION               |   QTY | DESCRIPTION                                              |
|---------------------------|-------|----------------------------------------------------------|
| L1, L2                    |     2 | 0.47µH ±20% inductors TOKO FDV0630-R47M                  |
| R1, R19                   |     0 | Not installed, resistors (0402)                          |
| R2                        |     1 | 0 Ω resistor (0402)                                      |
| R3, R4, R5, R12, R13, R18 |     6 | 10k Ω ±1% resistors (0402)                               |
| R6                        |     1 | 4.99k Ω ±1% resistor (0402)                              |
| R7, R10                   |     2 | 8.06k Ω ±1% resistors (0402)                             |
| R8, R9                    |     2 | 210 Ω ±1% resistors (0402)                               |
| R11                       |     1 | 10 Ω ±1% resistor (0402)                                 |
| R14, R15                  |     2 | 20k Ω ±1% resistors (0402)                               |
| R16                       |     1 | 49.9 Ω ±1% resistor (1206)                               |
| U1                        |     1 | Dual step-down regulator (32 TQFN-EP*) Maxim MAX8855ETJ+ |
| -                         |     2 | Shunts, 2-position                                       |
| -                         |     1 | PCB: MAX8855 EVALUATION KIT+                             |

- 5) Connect the positive lead of a voltmeter to the OUT1 pad and the negative lead of the voltmeter to the PGND1 pad of the EV kit.
- 6) Connect the positive lead of the other voltmeter to the OUT2 pad and the negative lead of the voltmeter to the PGND2 pad of the EV kit.
- 7) Connect the positive lead of a 5A electronic load to the OUT1 pad and the negative lead of the electronic load to the PGND1 pad of the EV kit.
- 8) Connect the positive lead of the second 5A electronic load to the OUT2 pad and the negative lead of the electronic load to the PGND2 pad of the EV kit.
- 9) Turn on the power supply.
- 10) Verify  that  VOUT1 is  1.8V  throughout the 2.35V to 3.6V input voltage range.
- 11) Verify  that  VOUT2 is  1.2V  throughout the 2.35V to 3.6V input voltage range.
- 12) Turn on both electronic loads. Repeat steps 10 and 11.

<!-- image -->

## Detailed Description

The MAX8855 EV kit evaluates the MAX8855 dual stepdown regulator. The regulator switching frequency is set to 1MHz by default and can be adjusted from 0.5MHz to 2MHz. The EV kit is designed to operate from a DC power supply that can provide 2.35V to 3.6V and 7A of current.

Regulator 1 (OUT1) is configured as a step-down regul ator  set  to  1.8V  and  can  provide 5A of current. Regulator 2 (OUT2) is configured as a step-down regulator set to 1.2V and can provide 5A of current.

The EV kit output voltages are adjustable from a minimum of 0.6V to a maximum of 0.9 x VIN. Refer to the Setting the Output Voltage  section of the MAX8855 IC data sheet to set other output voltages in this range for VOUT1 and VOUT2.

## Enable (EN1 and EN2)

The EV kit provides separate enable inputs, EN1 and EN2, to individually control or sequence the output voltages. The enable signals EN1 and EN2 are pulled up to VDD by resistors R3 and R18, respectively. To enable OUT1, remove the shunt from JU1; to disable OUT1, place the shunt on JU1 pins 2-3. To enable OUT2, remove the shunt from JU2; to disable OUT2, place the shunt on JU2 pins 1-2.

The enable inputs can also be driven from an external logic signal. With the JU1 and JU2 shunts removed, connect the EN1 signal to pin 2 of JU1, and the EN2 signal to pin 2 of JU2. The device enable pins are active-high and TTL compatible.

## Power-Good Outputs (PWRGD\_)

Regulator 1 and 2 provide power-good output signals that indicate when the corresponding output is in regulation.  PWRGD1 and PWRGD2 are open-drain outputs that are pulled up to VDD by a 20k Ω resistor. The power-good,  open-drain  output  for  regulator  1 (PWRGD1) is high impedance when VREFIN ≥ 0.54V and VFB1 ≥ 0.9 x VREFIN. PWRGD1 is low when VREFIN &lt; 0.54V, EN1 is low, VDD or VIN1 is below VUVLO, the thermal-overload protection is activated, or when VFB1 &lt; 0.9 x VREFIN.

PWRGD2 is high impedance when VSS2 ≥ 0.54V and VFB2 ≥ 0.9 x VSS2. PWRGD2 is low when VSS2 &lt; 0.54V, EN2 is low, VDD or VIN2 is below VUVLO, the thermal-overload protection is activated, or when VFB2 &lt; 0.9 x VSS2.

## External Reference Input (REFIN)

The EV kit provides an option for an external reference input.  To  use  an  external  reference,  remove  the  shunt from JU3 and connect an external reference between

<!-- image -->

## MAX8855 Evaluation Kit

0V and VDD - 1.6V to the REFIN pad to set the FB1 regulation voltage. To use the internal 0.6V reference, place a shunt on JU3 pins 1-2 to connect REFIN to SS1 (see Table 3). When the IC is shut down, REFIN is pulled to GND through an internal 335 Ω .

If additional filtering is required, a 0.22µF capacitor can be added (C5).

## Tracking

The EV kit can be configured as a tracking circuit (commonly used in DDR supply applications). To configure the EV kit for tracking, install resistors R1 and R19. These resistors form a voltage-divider that sets the tracking ratio. Remove R6 so OUT1 regulates to the REFIN voltage. Set jumper JU3 to pins 2-3. Refer to the MAX8855 IC data sheet for more information on tracking circuits and component selection.

## Sequencing

To enable sequencing on the EV kit, place a shunt on pins 1-2 of JU1. In this configuration, OUT1 remains disabled until OUT2 is enabled and reaches regulation. When OUT1 is disabled, OUT2 shuts down at the same time. Refer to the MAX8855 IC data sheet for more information on sequencing.

## Switching Frequency and Synchronization (FSYNC)

The EV kit operates from an internal 0.5MHz to 2MHz switching frequency set by R5. The EV kit's switching frequency is set to 1MHz by default. To change the switching frequency, replace R5 with a resistor value calculated as shown in the Setting the Switching Frequency section of the MAX8855 IC data sheet.

The EV kit can also be synchronized to an external clock from 250kHz to 2.5MHz by connecting the clock to the FSYNC BNC input. The external clock must have a duty cycle between 10% and 90% to ensure the regulators operate 180 ° out-of-phase.

## Thermal-Overload Protection

Thermal-overload protection limits the total power dissipation of the device. Internal thermal sensors monitor the internal die temperature of each regulator. When this temperature exceeds +165 ° C, the corresponding regulator is shut down, allowing the IC to cool. The thermal sensor turns the regulator on after the junction temperature cools by 20 ° C. In a continuous thermal-overload condition, this results in a pulsed output.

## Current Limit

The EV kit provides both peak and valley current limits to achieve robust short-circuit protection.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8855 Evaluation Kit

## VDL Supply

VDL is the low-side gate-drive supply for the device. The high-side gate drive (BST\_) and the IC supply voltage (VDD) are also derived from VDL. In the EV kit's default  configuration,  VDL is  connected to IN through the 0 Ω resistor R2, allowing the EV kit to operate from a

Table 1. Jumper JU1 Functions

| SHUNT LOCATION          | EN1 CONNECTED TO             | REGULATOR 1                                            |
|-------------------------|------------------------------|--------------------------------------------------------|
| Not installed (default) | Pulled up to V DD through R3 | Enabled                                                |
| 1-2                     | PWRGD2                       | Sequencing: OUT1 is enabled when OUT2 is in regulation |
| 2-3                     | GND                          | Disabled                                               |

Table 2. Jumper JU2 Functions

| SHUNT LOCATION          | EN2 CONNECTED TO              | REGULATOR 2   |
|-------------------------|-------------------------------|---------------|
| Not installed (default) | Pulled up to V DD through R18 | Enabled       |
| 1-2                     | GND                           | Disabled      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

single input supply between 2.35V and 3.6V. VDL can optionally be powered separately from the power input. When powering VDL separately, remove resistor R2 and connect a 2.35V to 3.6V supply to the VDL pad on the EV kit.

Table 3. Jumper JU3 Functions

| SHUNT LOCATION   | REFIN CONNECTED TO   | FUNCTION                                                      |
|------------------|----------------------|---------------------------------------------------------------|
| 1-2 (default)    | SS1                  | Internal reference (0.6V)                                     |
| 2-3              | OUT2 through R1      | OUT1 tracks V OUT2                                            |
| Not installed    | -                    | External reference (0V to V DD - 1.6V) connected to REFIN pad |

<!-- image -->

## MAX8855 Evaluation Kit

Figure 1. MAX8855 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8855 Evaluation Kit

Figure 2. MAX8855 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8855 Evaluation Kit

<!-- image -->

Figure 3. MAX8855 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8855 Evaluation Kit

Figure 4. MAX8855 EV Kit PCB Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8855 Evaluation Kit

<!-- image -->

Figure 5. MAX8855 EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8855 Evaluation Kit

Figure 6. MAX8855 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8855 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 11
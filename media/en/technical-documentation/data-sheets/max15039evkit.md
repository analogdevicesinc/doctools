<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX15039 evaluation kit (EV kit) demonstrates the MAX15039 6A, 2MHz step-down regulator with integrated switches for enterprise-server, telecommunication, computing, and networking power-supply applications. The EV kit is preset for a 1.8V output voltage at load currents up to 6A from a 2.9V to 5.5V input-voltage range. A 1MHz switching frequency and up to 95% efficiency (with the supplied components) is achieved by the EV kit.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15039EVKIT+ | EV Kit |

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1, C2        |     2 | 22µF ±10%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J226K   |
| C3, C9        |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K   |
| C4, C6        |     2 | 0.01µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H103K  |
| C5            |     1 | 2.2µF ±10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C225K |
| C7            |     0 | Not installed, ceramic capacitor (0603)                            |
| C8            |     1 | 0.022µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H223K  |
| C10           |     1 | 560pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H561K    |
| C11           |     1 | 1500pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H152K   |
| C12           |     1 | 33pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H330CT     |

## Features

- ♦ Evaluates Internal 26m Ω RDSON High-Side and 20m Ω RDSON Low-Side MOSFETs
- ♦ 6A Output
- ♦ ±1% Output Accuracy Over Load, Line, and Temperature
- ♦ Operates from 2.9V to 5.5V Input Supply
- ♦ All-Ceramic Capacitor Design
- ♦ 9 Selectable Output Voltages from 0.6V to 2.5V
- ♦ Programmable Output Voltages from 0.6V to (0.9 x VIN) through a Resistor-Divider
- ♦ 500kHz to 2MHz Adjustable Frequency
- ♦ Programmable Soft-Start Time
- ♦ REFIN for DDR Termination and Tracking Applications
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C13, C14      |     0 | Not installed, ceramic capacitors (0805)                         |
| C15           |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K |
| IN, OUT, PGND |     3 | Noninsulated banana jack connectors                              |
| JU1, JU2      |     2 | 2-pin headers                                                    |
| JU3, JU4, JU5 |     3 | 3-pin headers                                                    |
| L1            |     1 | 0.47µH, 8.3m Ω , 9.0A inductor (7.7mm x 7mm) TOKO FDV0620-R47    |
| R1            |     1 | 2.2 Ω ±5% resistor (0603)                                        |
| R2            |     1 | 10k Ω ±5% resistor (0603)                                        |
| R3            |     1 | 1k Ω ±5% resistor (0603)                                         |
| R4            |     1 | 2.67k Ω ±1% resistor (0603)                                      |
| R5            |     1 | 20k Ω ±5% resistor (0603)                                        |
| R6            |     1 | 158 Ω ±1% resistor (0603)                                        |
| R7            |     1 | 49.9k Ω ±1% resistor (0603)                                      |
| R8, R9        |     0 | Not installed, resistors (0603)                                  |
| U1            |     1 | 2MHz buck controller (24 TQFN-EP*) Maxim MAX15039ETG+            |
| -             |     5 | Shunts (JU1-JU5)                                                 |
| -             |     1 | PCB: MAX15039 EVALUATION KIT+                                    |

*EP = Exposed pad.

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX15039 Evaluation Kit

## Procedure

The MAX15039 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are competed.

- 1) Preset the DC power supply to 5V and disable the power-supply output.
- 2) Set the load to 6A or less and disable the load.
- 3) Verify that shunts are installed on the EV kit jumpers as follows:
- 4) Connect the power-supply positive terminal to the IN banana jack and the negative terminal to the PGND banana jack.
- 5) Connect the load positive terminal to the OUT banana jack and the negative terminal to the PGND banana jack.
- 6) Set the DMM to measure voltage. Connect the positive terminal to the OUT PCB pad and the negative terminal to the PGND PCB pad.
- 7) Enable the power supply.
- 8) Enable the load.

JU1: Installed (MAX15039 disabled)

JU2: Installed (internal 0.6V reference)

VOUT = 1.8V:

JU3: Not installed

JU4: Pins 1-2

JU5: Pins 2-3 (forced-PWM mode)

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX15039 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX15039 EV kit
- 2.9V to 5.5V, 6A DC power supply
- One digital multimeter (DMM)
- One load up to 6A
- 9) Remove the shunt from jumper JU1 (MAX15039 enabled).
- 10) Verify that the DMM measures 1.8V.

## Detailed Description of Hardware

The MAX15039 EV kit demonstrates the MAX15039 6A, 2MHz step-down regulator with integrated switches in a 24-pin TQFN surface-mount package with an exposed pad. Applications include enterprise-server, telecommunication, computing, and networking power supplies.

The EV kit generates selectable output voltages from 0.6V to 2.5V at load currents up to 6A. The output voltage should be configured only BEFORE power-up using jumpers JU3 (CTL1) and JU4 (CTL2). Once the IC is enabled using jumper JU1 (EN), jumpers JU3 and JU4 should not be changed until power cycling or disabling the IC. The EV kit can also program the output voltage from 0.6V to (0.9 x VIN) through resistor-dividers R8 and R9. Jumper JU2 (REFIN) configures the EV kit reference voltage as an internal 0.6V reference or a user-supplied 0V to (VDD - 2V) voltage reference connected across the REF\_IN and GND PCB pads.

The EV kit operates in three different functional modes (forced PWM, monotonic startup, and skip), as configured by jumper JU5 (MODE). The EV kit shows a 1MHz switching frequency and up to 95% efficiency with the supplied components. The EV kit can evaluate other switching frequencies between 500kHz and 2MHz. See the Evaluating Other Switching Frequencies (FREQ) section for more information. The EV kit also provides a PWRGD PCB pad to access the IC's power-good logic output. The EV kit operates from a 2.9V to 5.5V input DC power supply connected across the IN and PGND banana jacks.

## Regulator Enable (EN)

The MAX15039 features a shutdown mode to minimize the IC quiescent current. To shut down the IC, install a shunt on jumper JU1. For normal operation, remove the shunt from JU1. See Table 1 to configure jumper JU1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15039 Evaluation Kit

Table 1. Regulator Enable (JU1)

## Evaluating Other Output Voltages

| SHUNT POSITION   | EN PIN CONNECTION                   | MAX15039 FUNCTION   |
|------------------|-------------------------------------|---------------------|
| Not installed    | Pulled up to IN through resistor R2 | Enabled             |
| Installed        | GND                                 | Disabled            |

Table 2. Reference Voltage (JU2)

| SHUNT POSITION   | REFIN PIN CONNECTION               | REFERENCE VOLTAGE                                       |
|------------------|------------------------------------|---------------------------------------------------------|
| Installed        | U1 SS pin                          | Internal 0.6V reference                                 |
| Not installed    | REF_IN PCB pad through resistor R3 | User-supplied reference voltage Range: 0V to (VDD - 2V) |

## Reference Voltage (REFIN)

The MAX15039 uses an internal 0.6V reference or an external reference input. To use the internal 0.6V reference, install a shunt on jumper JU2 shorting U1's REFIN and SS pins.

When using an external reference, perform the following steps:

- 1) Remove the shunt from jumper JU2.
- 2) Install  a  surface-mount 0603 capacitor at C7 for soft-starting, if needed.
- 3) Connect a 0V to (VDD - 2V) reference across the REF\_IN and GND PCB pads.

The IC regulates FB to the voltage at U1's REFIN pin. The internal soft-start is not available when using an external reference. Refer to the Soft-Start and REFIN section in the MAX15039 IC data sheet for more information on using the REFIN features. See Table 2 to configure jumper JU2.

<!-- image -->

The EV kit comes preset to a 1.8V output voltage. The output voltage is selectable using jumpers JU3 (CTL1) and JU4 (CTL2) to provide three logic level inputs: VDD, unconnected, and GND. The logic states of CTL1 and CTL2 should be selected only before power-up. CTL1 and CTL2 should not be changed once soft-start is complete. If the output voltage needs to be reselected, perform the following steps:

- 1) Disable the regulator using jumper JU1, or remove power.
- 2) Set the CTL1 and CTL2 logic states using jumpers JU3 and JU4.
- 3) Enable the regulator, or apply power.

See Table 3 to configure jumpers JU3 and JU4.

When externally programming the MAX15039, install a 8.06k Ω surface-mount 0603 resistor at R8 and then select a value for a surface-mount 0603 resistor at R9 using the following equation:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where VOUT is the desired output voltage and VREFIN is the voltage applied at the REF\_IN and GND PCB pads. Refer to the MAX15039 IC data sheet for information on selecting output inductor, capacitor, and compensation components to optimize the circuit for different output voltages.

## Mode Selection

The MAX15039 IC's three functional modes (forced PWM, monotonic startup, and skip) are programmable using jumper JU5. Refer to the MODE Selection section in the MAX15039 IC data sheet for more information on the IC's three functional modes. See Table 4 to configure jumper JU5.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15039 Evaluation Kit

Table 3. Output-Voltage Selection (JU3, JU4)

| SHUNT POSITION (JU3)   | CTL1 PIN CONNECTION   | SHUNT POSITION (JU4)   | CTL2 PIN CONNECTION   | V OUT (V)                             | V OUT (V) WHEN USING EXTERNAL V REFIN        |
|------------------------|-----------------------|------------------------|-----------------------|---------------------------------------|----------------------------------------------|
| 2-3                    | GND                   | 2-3                    | GND                   | 0.6V* or 0.6V < V OUT ≤ 0.9 x V IN ** | V REFIN * or V REFIN < V OUT ≤ 0.9 x V IN ** |
| 1-2                    | VDD                   | 1-2                    | VDD                   | 0.7                                   | V REFIN x (7/6)                              |
| 2-3                    | GND                   | Not installed          | Unconnected           | 0.8                                   | V REFIN x (4/3)                              |
| 2-3                    | GND                   | 1-2                    | VDD                   | 1.0                                   | V REFIN x (5/3)                              |
| Not installed          | Unconnected           | 2-3                    | GND                   | 1.2                                   | V REFIN x 2                                  |
| Not installed          | Unconnected           | Not installed          | Unconnected           | 1.5                                   | V REFIN x 2.5                                |
| Not installed          | Unconnected           | 1-2                    | VDD                   | 1.8                                   | V REFIN x 3                                  |
| 1-2                    | VDD                   | 2-3                    | GND                   | 2.0                                   | V REFIN x (10/3)                             |
| 1-2                    | VDD                   | Not installed          | Unconnected           | 2.5                                   | V REFIN x (25/6)                             |

## Table 4. Mode Selection (JU5)

| SHUNT POSITION   | MODE PIN CONNECTION   | MAX15039 IC FUNCTIONAL MODE                         |
|------------------|-----------------------|-----------------------------------------------------|
| 2-3              | GND                   | Forced PWM                                          |
| Not installed    | Unconnected           | Forced PWM, monotonic startup into prebiased output |
| 1-2              | VDD                   | Skip, monotonic startup into prebiased output       |

## Evaluating Other Switching Frequencies (FREQ)

The EV kit comes preset at a 1MHz switching frequency. To evaluate other frequencies, select a different value for surface-mount 0603 resistor R7 using the following equation:

<!-- formula-not-decoded -->

where fS is the desired switching frequency in megahertz and must be between 500kHz and 2MHz. Refer to the MAX15039 IC data sheet for information on selecting output inductor, capacitor, and compensation components to optimize the circuit for different switching frequencies.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power Good (PWRGD)

The MAX15039 PWRGD is an open-drain output that goes to high impedance when VFB is above 0.925 x VREFIN and VREFIN is above 0.54V for at least 48 clock cycles. PWRGD pulls low when VFB is below 90% of VREFIN or VREFIN is below 0.54V for at least 48 clock cycles. PWRGD is also low during shutdown. On the EV kit,  the PWRGD PCB pad is pulled up to VDD through resistor  R5.  Use the GND PCB pad as a ground reference for this signal.

<!-- image -->

## MAX15039 Evaluation Kit

Figure 1. MAX15039 EV Kit Schematic (Application Circuit)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15039 Evaluation Kit

Figure 2. MAX15039 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15039 Evaluation Kit

<!-- image -->

Figure 3. MAX15039 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15039 Evaluation Kit

Figure 4. MAX15039 EV Kit PCB Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15039 Evaluation Kit

<!-- image -->

Figure 5. MAX15039 EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX15039 Evaluation Kit

Figure 6. MAX15039 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX15039 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/09            | Initial release                                                                                                                      | -               |
|                 1 | 5/10            | Updated the Detailed Description of Hardware , Reference Voltage (REFIN) , and Evaluating Other Output Voltages sections and Table 3 | 2, 3, 4         |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.
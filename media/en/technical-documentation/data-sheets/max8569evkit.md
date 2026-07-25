<!-- lastmod 2022-08-02 -->
## General Description

The MAX8569 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board demonstrating the MAX8569A or MAX8569B 200mA step-up boost converter. The EV kit comes with the MAX8569B installed. The application circuits provide a 3.3V output voltage capable of sourcing a maximum of 200mA load current from a 1.5V to 5.5V input source. The MAX8569 features internal MOSFETs to reduce cost and size. It also includes skip mode, which optimizes efficiency at light loads to improve battery life. The MAX8569 EV kit can also be used to evaluate the MAX8569A and MAX8569B30 with minor PCB modification.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8569EVKIT+ | EV Kit |

Note: The MAX8569 EV kit is installed with the MAX8569B. To evaluate the MAX8569A or MAX8569BETT30, order the corresponding part along with the MAX8569 EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                      |
|---------------|-------|------------------------------------------------------------------------------------------------------------------|
| C1, C5        |     2 | 10µF ±10%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106K Murata GRM21BR60J106K                           |
| C2, C6        |     2 | 0.01µF ±10%, 25V X5R ceramic capacitors (0402) Taiyo Yuden TMK105BJ103K TDK C1005X7R1E103K Murata GRM155R71E103K |
| C3, C7        |     2 | 22µF ±20%, 6.3V X5R ceramic capacitors (0805) Taiyo Yuden JMK212BJ226M TDK C2012X5R0J226M                        |
| C4, C8        |     0 | Not installed, capacitors (0805)                                                                                 |
| JU1, JU2      |     2 | 3-pin headers, 0.1in centers Sullins PEC36SAAN                                                                   |
| L1, L2        |     2 | 10µH, 0.85A, 144m inductors (4mm x 4mm x 1.8mm) TOKO A1102AS-100M (DEA4018CK series)                             |

- ♦
- Output Current Up to 200mA
- ♦ 1.5V to 5.5V Input Voltage Range
- ♦ BATT Connected to OUT in Shutdown for Backup Power
- ♦ Up to 90% Efficiency
- ♦ 7µA Typical Quiescent Current
- ♦ &lt; 1µA Shutdown Supply Current
- ♦ Internal Synchronous Rectifier
- ♦ 750mA (typ) Switch Current Limit
- ♦ RST Output (MAX8569B)
- ♦ Adjustable Output Voltage (MAX8569A)
- ♦ Fixed 3.0V or 3.3V Output Voltage (MAX8569B)
- ♦ Fully Assembled and Tested PCB
- ♦ Lead(Pb)-Free and RoHS Compliant

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                        |
|-----------------|-------|--------------------------------------------------------------------|
| R1, R7          |     2 | 221k ±1% resistors (0402)                                          |
| R2, R8          |     2 | 1M ±1% resistors (0402)                                            |
| R3, R4, R9, R10 |     0 | Not installed, resistors (0402)                                    |
| R5, R11         |     2 | 0 ±5% resistors (0402)                                             |
| R6, R12         |     2 | 100k ±5% resistors (0402)                                          |
| U1              |     1 | Low-quiescent-current boost regulator (6 SOT23) Maxim MAX8569BEUT+ |
| U2              |     1 | Low-quiescent-current boost regulator (6 TDFN) Maxim MAX8569BETT+  |
| -               |     2 | Shunts (see Table 1) Sullins STC02SYAN                             |
| -               |     1 | PCB: MAX8569 Evaluation Kit+                                       |

1

<!-- image -->

## MAX8569 Evaluation Kit

Features

## MAX8569 Evaluation Kit

- MAX8569 EV kit
- Adjustable 6V power supply capable of delivering 1A (PS1)
- Two digital multimeters (DMM1, DMM2)
- Electronic load capable of sinking 200mA (EL1)

## Procedure

The MAX8569 EV kit is a fully assembled and tested surface-mount circuit board. Follow the steps below to set up and verify both packages of the MAX8569B and board operation. Place a '1' in the '\_' (e.g., JU\_ becomes JU1) when evaluating the 6-pin SOT23 package (U1, Figure 1). Place a '2' in the '\_' (e.g., JU\_ becomes JU2) when evaluating the 6-pin TDFN (3mm x 3mm) package (U2, Figure 1).

- 1) Preset the power supply (PS1) to 2.5V. Turn off the power supply. Caution: Do not turn the power supply on until all connections are completed.
- 2) Preset the electronic load (EL1) to 200mA. Turn off the electronic load.
- 3) Verify on the MAX8569 EV kit that there are shunts installed on JU\_ between pins 1-2 for normal operation.
- 4) Connect the positive lead of PS1 to BATT\_ and the negative lead to GND\_.
- 5) Connect the positive lead of DMM1 to VOUT\_ and the negative lead to GND\_ to measure the output voltage.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX8569 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- 6) Connect the positive lead of DMM2 to RESET\_ and the negative lead to GND\_ to measure the reset voltage.
- 7) Connect the positive lead of EL1 to VOUT\_ and the negative lead to GND\_. Leave EL1 off until further instructions.
- 8) Turn on PS1 and measure DMM1, which should read 3.3V indicating that the MAX8569 is operational.  Sweep the input voltage from 1.5V to 3.3V and monitor output voltage.
- 9) Verify that the reset voltage (DMM2) tracks the input voltage (DMM1) over the entire input range (1.5V to 3.3V).
- 10) Increase PS1 from 3.3V to 5.5V.
- 11) Verify that the output voltage (DMM1) and the reset voltage (DMM2) track the input voltage (PS1) over the 3.3V to 5.5V range.
- 12) Set PS1 to 1.8V.
- 13) Turn on the electronic load (EL1).
- 14) Verify  that  the  output  voltage  (DMM1) is  approximately 3.3V.
- 15) Turn off the MAX8569 by connecting pins 2-3 of jumper JU\_).

When evaluation of the MAX8569 EV kit is completed, use the following steps to power down the EV kit:

- 1) Turn off the EL1.
- 2) Turn off PS1.
- 3) Disconnect all test leads from the EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description of Hardware

## Power-On Reset ( RST )

The MAX8569B provides a power-on reset output ( RST ) that  goes high when the output reaches 90% of the nominal voltage. RESET\_ pulls  low  when  the  output  is below 90% of the nominal voltage.

## Shutdown

Place a shunt between pins 2-3 of jumper JU\_ to shut down the MAX8569\_ and reduce the input current to less than 1µA. During shutdown, the BATT\_ input is connected to VOUT\_ through the inductor and the internal  synchronous rectifier. This allows the input battery (rather than a separate backup battery) to provide backup power for devices such as a microcontroller, SRAM, or real-time clock, without the usual diode forward drop. Place a shunt between pins 1-2 of jumper JU\_ to enable the IC for normal operation.

## Low-Battery Cutoff

The SHDN trip threshold of the MAX8569\_ may be used as an input-voltage detector that disables the IC when the  battery  voltage  falls  below  a  set  level.  To  use  the input-voltage-detector circuit, remove the shunt from jumper JU\_. The SHDN trip threshold is 1.228V (typ). A resistor-divider sets the battery-detection voltage

## MAX8569 Evaluation Kit

(R1/R2 and R7/R8). The low-battery threshold is factory-set at 1.5V. To change the threshold, replace R1/R7. Calculate R1/R7 (RT) as follows:

<!-- formula-not-decoded -->

where VOFF is the battery voltage at which the part shuts down and V SHDN = 1.228V.

## Evaluating the MAX8569A

The MAX8569 EV kit is easily modified to evaluate the MAX8569A. To evaluate the MAX8569A, remove the 0 Ω resistor from R5/R11 and the 100k Ω resistor from R6/R12. Install a 100k Ω resistor  at  R4/R10.  Calculate R3/R9 (RT) as follows:

<!-- formula-not-decoded -->

where VOUT is the desired output voltage and VFB is 1.228V.

Note: The external components may need to be optimized for the selected output voltage, as described in the MAX8569A/MAX8569B IC data sheet.

## Table 1. Jumper JU1 Functions ( SHDN Control)

| SHUNT POSITION   | SHDN PIN          | OPERATION        |
|------------------|-------------------|------------------|
| 1-2              | Connected to BATT | Normal operation |
| 2-3              | Connected to GND  | Shutdown mode    |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8569 Evaluation Kit

Figure 1. MAX8569 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX8569 EV Kit Component Placement Guide

<!-- image -->

## MAX8569 Evaluation Kit

Figure 3. MAX8569 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8569 Evaluation Kit

Figure 4. MAX8569 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX8569 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6
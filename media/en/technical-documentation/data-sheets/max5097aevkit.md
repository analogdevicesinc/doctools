<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX5097A evaluation kit (EV kit) demonstrates the MAX5097A in a standard application circuit demonstrating high efficiency. The EV kit circuit features a MAX5097A IC in a 16-pin TQFN package. The EV kit can operate from a 5V to 40V input source.

The MAX5097A EV kit includes a current-mode DC-DC step-down regulator (Buck Mode) and a selectable lowquiescent-current LDO regulator for operation at lightload (LDO Mode). The step-down regulator provides a 3.3V output with up to 600mA output current. In LDO Mode, the MAX5097A IC provides up to 100mA output current.  The  EV  kit  circuit's  step-down  regulator  operates at a switching frequency of 330kHz, thus allowing the use of small ceramic capacitors at the output. The MAX5097A is capable of synchronizing to an external digital clock.

The MAX5097A EV kit can be reconfigured for other output voltages by selecting appropriate external components. The EV kit circuit features soft-start, output current-limit, and an open-drain active-low reset output PCB pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 150µF, 50V electrolytic capacitor (8mm x 10.2mm) Panasonic EEVFK1H151P |
| C2            |     1 | 0.22µF ±10%, 50V X5R ceramic capacitor (0805) Murata GRM21BR71H224K    |
| C3            |     1 | 22µF ±20%, 6.3V X5R ceramic capacitor (1206) Murata GRM31CR60J226M     |
| C4            |     1 | 1200µF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H122J     |
| C5            |     1 | 22pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H220J       |
| C6            |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H103K    |
| C7            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K       |

- ♦ 5V to 40V Input Voltage (Buck Mode)
- ♦ 4V to 40V Input Voltage (LDO Mode)
- ♦ 3.3V Output at Up to 600mA (Buck Mode)
- ♦ Low Quiescent Current 3.3V Output at Up to 100mA (LDO Mode)
- ♦ Configurable Output Voltage
- ♦ 330kHz Switching Frequency
- ♦ Capable of Synchronizing to an External Clock
- ♦ Open-Drain RESET Output PCB Pad
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX5097AEVKIT+ | 0°C to +70°C* | 16 TQFN-EP   |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C8            |     1 | 0.047µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H473K                        |
| D1            |     1 | 2.0A, 60V high-speed switching diode (SMA) Diodes Inc MURS120-13-F                          |
| JU1, JU2      |     2 | 2-pin headers                                                                               |
| JU3           |     1 | 3-pin header                                                                                |
| L1            |     1 | 22µH, 1.6A inductor Sumida CDRH8D28-220NP                                                   |
| R1            |     0 | Not installed, resistor (0603)                                                              |
| R2            |     1 | 0 Ω ±5% resistor (0603)                                                                     |
| R3            |     1 | 100k Ω ±1% resistor (0603)                                                                  |
| R4, R5, R7    |     3 | 100k Ω ±5% resistors (0603)                                                                 |
| R6            |     1 | 10k Ω ±5% resistor (0603)                                                                   |
| U1            |     1 | 40V input, 330kHz step-down converter with LDO MAX5097AATE+ (16-pin, 5mm x 5mm thin QFN-EP) |
| -             |     3 | Shunts                                                                                      |
| -             |     1 | PCB: MAX5097AEVKIT+                                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## Features

## MAX5097A Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE           |
|-------------|--------------|-------------------|
| Diodes Inc. | 805-446-4800 | www.diodes.com    |
| Murata      | 770-436-1300 | www.murata.com    |
| Panasonic   | 714-373-7366 | www.panasonic.com |
| Sumida      | 847-545-6700 | www.sumida.com    |

Note: Indicate that you are using the MAX5097A when contacting these component suppliers.

## Quick Start

The MAX5097A EV kit is fully assembled and tested. Follow these steps to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

## Required Equipment

- 5V to 40V, 1A rated DC power supply
- One voltmeter, one ammeter
- Electronic load, such as an HP 6060B

## Output Startup

- 1) Verify  that  a  shunt  is  installed  across  jumpers  JU1 (LDO/ BUCK , Buck Mode enabled) and JU2 (SYNC, 330kHz).
- 2) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU3 (EN, input enabled).
- 3) Connect the electronic load positive terminal to the VOUT pad and connect the load's negative terminal to the PGND pad.
- 4) Connect the voltmeter to the VOUT and PGND pads.
- 5) Connect the power-supply positive terminal to the VIN pad and connect the supply ground to the PGND pad.
- 6) Enable the electronic load output and set it to 80mA current loading.
- 7) Turn on the power supply and set it to 12V.
- 8) Verify that VOUT is 3.3V.
- 9) Remove the shunt from jumper JU1 and verify that the LDO regulator output (VOUT) is 3.3V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages section.

## Detailed Description

The MAX5097A EV kit includes a high-efficiency current-mode DC-DC step-down regulator (Buck Mode) and a selectable low-quiescent-current LDO regulator (LDO Mode). The EV kit circuit features a MAX5097A IC in  a  16-pin  TQFN exposed paddle package. The MAX5097A EV kit operates from a 5V to 40V input range DC source that can provide the EV kit with 1A or more of current.

The Buck Mode regulator provides a 3.3V output at up to  600mA output current. An internal p-channel MOSFET works as a pass element when in LDO Mode and delivers up to 100mA of load current. Resistors R1 and R2 set the output voltage at VOUT. The output voltage can be adjusted from 1.24V to 11V by selecting appropriate resistors. The EV kit's Buck Mode regulator operates at a switching frequency of 330kHz or the circuit can be configured to synchronize with an external clock by removing jumper JU2.

When configured for synchronizing mode, an external TTL square-wave clock is used to synchronize and set the switching frequency up to 500kHz. SYNC and SGND PCB pads are provided for connecting the external clock. See the Clock Synchronization section for more information on the external clock.

Capacitor C8 sets the soft-start feature. An open-drain active-low RESET PCB pad is provided for interfacing. The RESET pad is pulled up to VOUT by resistor R4, and jumper JU3 controls the shutdown mode that reduces the MAX5097A IC shutdown current to 6µA (typ).

## Jumper Selection and VOUT Reconfiguration

## Step-Down and Low-Quiescent-Current LDO Regulators

The MAX5097A EV kit features two modes for regulating the output; a Buck Mode regulator or a low-quiescent-current LDO Mode regulator. The 2-pin jumper, JU1, selects the mode of operation for the EV kit. Table 1 lists the selectable jumper options.

## Table 1. Operation Mode JU1 Functions

| SHUNT LOCATION   | LDO/ BUCK PIN           | MAX5097A OPERATION MODE         |
|------------------|-------------------------|---------------------------------|
| Open             | Connected to BP with R7 | LDO regulator (100mA max)       |
| Installed        | Connected to SGND       | Buck Mode regulator (600mA max) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5097A Evaluation Kit

## Clock Synchronization

The MAX5097A EV kit has a PCB pad that enables the circuit to synchronize with an external TTL square-wave clock source. The 2-pin jumper, JU2, is provided to connect the MAX5097A SYNC pin to SGND for noise immunity. To synchronize the Buck Converter to an external clock, remove jumper JU2 and connect the TTL clock to the PCB SYNC pad. JU2 selects the clock synchronization  or  internal  frequency  for  the MAX5097A. Table 2 lists the jumper options.

Table 2. Clock JU2 Functions

| SHUNT LOCATION   | SYNC PIN                           | EV KIT OPERATING MODE                                              |
|------------------|------------------------------------|--------------------------------------------------------------------|
| None             | Connected to external clock source | Synchronization mode: Synchronized to an external clock frequency* |
| Installed        | Connected to SGND                  | Internal oscillator, 330kHz                                        |

- Logic-low = 0 to 0.8V
- Logic-high = 2.0V to 5.5V

Output frequency = 330kHz (synchronization range is 300kHz to 500kHz, refer to the MAX5097A data sheet for more information)

Minimum pulse: 250ns (min) pulse width (high or low)

Connect the external square-wave clock to the SYNC and SGND PCB pads.

<!-- image -->

## Shutdown Control

The MAX5097A EV kit has a jumper to control the shutdown mode and thus reduce the MAX5097A current consumption. The 3-pin jumper, JU3, selects the shutdown mode for the MAX5097A circuit. Table 3 lists the jumper options.

Table 3. Shutdown JU3 Functions

| SHUNT LOCATION   | EN PIN                              | EV KIT OPERATING MODE                               |
|------------------|-------------------------------------|-----------------------------------------------------|
| 2-3              | Connected to R5                     | Shutdown, VOUT = disabled                           |
| 1-2              | Connected to VIN                    | Enabled, VOUT = enabled                             |
| -                | Connected to an external controller | External controller determines mode, enabled = high |

## Evaluating Other Output Voltages

The MAX5097A EV kit's step-down DC-DC converter output (VOUT) is set to 3.3V by connecting the MAX5097A ADJ pin to SGND. To generate output voltages other than 3.3V (1.24V to 11V), select different voltage-divider resistors (R1, R2). Additionally, inductor L1, input and output capacitors C1, C3, and compensation components R3, C4, and C5 should be evaluated. Refer to the MAX5097A data sheet for information on selecting all these components.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5097A Evaluation Kit

Figure 1. MAX5097A EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5097A Evaluation Kit

<!-- image -->

Figure 2. MAX5097A EV Kit Component Placement GuideComponent Side

Figure 3. MAX5097A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5097A EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5097A Evaluation Kit

Figure 5. MAX5097A EV Kit PCB Layout-VCC Layer 3

<!-- image -->

Figure 6. MAX5097A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

Janet Freed
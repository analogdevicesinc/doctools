<!-- lastmod 2022-08-02 -->
## General Description

The MAX8646 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the capabilities of the MAX8646 integrated 6A step-down regulator. The EV kit generates a +1.8V output voltage at load currents up to 6A from a 2.35V to 3.6V input voltage range. The MAX8646 switches at 1MHz and up to 95% efficiency with the supplied components.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8646EVKIT+ | EV Kit |

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1, C2A, C2B  |     3 | 22µF ±10%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J226K  |
| C3, C9        |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K  |
| C4, C6        |     2 | 0.01µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H103K |
| C5            |     1 | 1µF ±10%, 16V X5R ceramic capacitor (0603) TDK C1608X5R1C105K     |
| C7, C13, C14  |     0 | Not installed, ceramic capacitors (0603)                          |
| C8            |     1 | 1000pF, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K       |
| C10           |     1 | 680pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H681K   |
| C11           |     1 | 1500pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H152K  |
| C12           |     1 | 33pF ±5pF, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H330CT   |

## MAXIM

<!-- image -->

## Features

- ♦ Internal 23m Ω On-Resistance MOSFETs
- ♦ 6A Output PWM Step-Down Regulator
- ♦ ±1% Output Accuracy over Load, Line, and Temperature
- ♦ Operates from 2.35V to 3.6V Input Supply
- ♦ Adjustable Output from 0.6V to (0.9 x VIN)
- ♦ 500kHz to 2MHz Adjustable Frequency
- ♦ Allows All-Ceramic Capacitor Design
- ♦ Programmable Soft-Start Time
- ♦ 24-Pin, 4mm x 4mm Thin QFN Package
- ♦ REFIN for DDR Termination and Tracking Applications
- ♦ Surface-Mount Components
- ♦ Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                   |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------|
| C15           |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K                                                              |
| JU1, JU2      |     2 | 2-pin headers                                                                                                                 |
| JU3, JU4      |     2 | 3-pin headers                                                                                                                 |
| L1            |     1 | 0.47µH, 7.6m Ω , 9.6A inductor (7.7mm x 7mm x 2mm) TOKO FDV0620-R47                                                           |
| R1            |     1 | 10 Ω ±5% resistor (0603) lead free                                                                                            |
| R2            |     1 | 10k Ω ±5% resistor (0603) lead free                                                                                           |
| R3            |     1 | 1k Ω ±5% resistor (0603) lead free                                                                                            |
| R4            |     1 | 3.57k Ω ±1% resistor (0603) lead free                                                                                         |
| R5            |     1 | 20k Ω ±5% resistor (0603) lead free                                                                                           |
| R6            |     1 | 432 Ω ±1% resistor (0603) lead free                                                                                           |
| R7            |     1 | 49.9k Ω ±1% resistor (0603) lead free                                                                                         |
| R8            |     0 | Not installed, resistor (0603). Must be 8.06k Ω ±1% resistor (0603) when populated for adjustable output voltage programming. |
| R9            |     0 | Not installed, resistor (0603) for adjustable output voltage programming                                                      |

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8646 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| R10           |     1 | 2.2 Ω ±5% resistor (0603) lead free             |
| U1            |     1 | Step-down regulator (24 TQFN) Maxim MAX8646ETG+ |
| -             |     5 | Shunts                                          |
| -             |     1 | PCB: MAX8646 Evaluation Kit+                    |

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 2V to 4V at +6A variable DC power supply or battery
- Digital multimeter (DMM)
- Up to 6A load
- Ammeter (optional)

## Procedure

The MAX8646 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Preset the DC power supply to 3.3V. Turn off the power supply. Caution: Do not turn on the power supply until all connections are made.
- 2) Remove the shunt from JU1.
- 3) Verify that no two pins are shunted together on jumper JU3.
- 4) Verify  that  there  is  a  shunt  on  pins  1-2  of  jumper JU4.
- 5) Connect the positive lead of the power supply to the IN pad and connect the negative lead of the power supply to the GND pad on the EV kit.
- 6) Connect the positive lead of the DMM to the OUT pad and connect the negative lead of the DMM to the GND pad on the EV kit.
- 7) Turn on the power supply.
- 8) Verify that the voltage at OUT is 1.8V.
- 9) Connect the load between OUT and GND.
- 10) Verify that the voltage at OUT is 1.8V.

## Component Suppliers

| SUPPLIER           | PHONE        | WEBSITE               |
|--------------------|--------------|-----------------------|
| TDK Corp.          | 847-803-6100 | www.component.tdk.com |
| TOKO America, Inc. | 847-297-0070 | www.tokoam.com        |

Note: Indicate that you are using the MAX8646 when contacting these component suppliers.

## Detailed Description of Hardware

## Evaluating Other Output Voltages

The MAX8646 EV kit comes preset to a 2.5V output voltage. As shown in Table 1, the output voltage is pinprogrammable by the logic states of CTL1 and CTL2, jumpers JU3 and JU4, respectively. CTL1 and CTL2 are three-level inputs: VDD, unconnected, and GND. The logic states of CTL1 and CTL2 should be programmed only before power-up. To avoid damage to the IC, CTL1 and CTL2 should not be changed once soft-start is complete. If the output voltage needs to be reprogrammed, cycle power or EN and reprogram during or before soft-start.

## Table 1. CTL1 and CTL2 Output Voltage Selection

| CTL1/JU3    | CTL2/JU4    | V OUT (V)               |
|-------------|-------------|-------------------------|
| 2-3         | 2-3         | 0.6 or external divider |
| 1-2         | 1-2         | 0.7                     |
| 2-3         | Unconnected | 0.8                     |
| 2-3         | 1-2         | 1.0                     |
| Unconnected | 2-3         | 1.2                     |
| Unconnected | Unconnected | 1.5                     |
| Unconnected | 1-2         | 1.8                     |
| 1-2         | 2-3         | 2.0                     |
| 1-2         | Unconnected | 2.5                     |

When the output voltage of the MAX8646 is programmed to a preset voltage, Ri is internal to the IC and R9 is not installed (Figure 1b).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8646 Evaluation Kit

Figure 1. Preset and Adjustable Output Configuration

<!-- image -->

When externally programming the MAX8646 (Figure 1a), install  an  8.06k Ω resistor  at  R8.  The  output  voltage  is then determined by:

<!-- formula-not-decoded -->

For an output voltage of 0.6V, install an 8.06k Ω resistor at  R8  and  do  not  install  R9.  Refer  to  the  MAX8646  IC data sheet for information on selecting output inductor, capacitor, and compensation components to optimize the circuit for different output voltages.

## Evaluating Other Switching Frequencies (FREQ)

The MAX8646 EV kit comes preset with a 1MHz switching frequency. Replace R7 to change the switching frequency. R7 is calculated as:

<!-- formula-not-decoded -->

where the switching frequency is in megahertz and must be between 500kHz and 2MHz. Refer to the MAX8646 IC data sheet for information on selecting output inductor,  capacitor,  and  compensation components to optimize the circuit for different switching frequencies.

<!-- image -->

## Using the REFIN Input

The MAX8646 features an external reference input (REFIN). The IC regulates FB to the voltage applied to REFIN. The internal soft-start is not available when using an external reference. A method of soft-start when using an external reference is shown by the use of R3 and C7 in Figure 2. To use the REFIN input of the EV kit,  remove the shunt on jumper JU2. Connect an external  reference to  the  REFIN  pad  on  the  EV  kit.  If the external reference produces step-voltage changes, install  C7.  Refer  to  the  MAX8646  IC  data  sheet  for more details.

## Power Good (PWRGD)

PWRGD is an open-drain output that goes high impedance when VFB is above 0.54V. PWRGD pulls low when VFB is below 0.54V for at least 48 clock cycles. PWRGD is low during shutdown. PWRGD is pulled up to VDD through R5.

Jumper JU1 Function (Shutdown Mode) The MAX8646 features a shutdown mode to minimize the IC quiescent current. To shut down the IC, place a shunt between pins 1-2 of JU1. For normal operation, remove the shunt from JU1.

## Soft-Starting into a Prebiased Output

When the PREBIAS pin is left unconnected, the MAX8646 is capable of soft-starting up into a prebiased output without discharging the output capacitor. This type of operation is also termed monotonic startup.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8646 Evaluation Kit

However, in order to avoid output-voltage glitches during soft-start,  it  should  be  ensured  that  the  inductor current is in continuous conduction mode during the end of the soft-start period. This is done by satisfying the following equation:

<!-- formula-not-decoded -->

where CO is the output capacitor, VO is the output voltage, tSS is  the  soft-start  time  set  by  the  soft-start capacitor CSS, and IP-P is the peak-to-peak inductor ripple current (as defined in the Output Capacitor Selection section in the MAX8646 IC data sheet). Connecting the PREBIAS pin to GND disables the prebias soft-start feature and causes the MAX8646 to discharge any voltage present on the output capacitors and then commence its soft-start.

To disconnect the PREBIAS pin from GND, cut the trace in front of JU1 on the top side of the MAX8646 EV kit PCB.

Figure 2. MAX8646 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX8646 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX8646 Evaluation Kit

Figure 4. MAX8646 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX8646 EV Kit PCB Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8646 Evaluation Kit

Figure 6. MAX8646 EV Kit PCB Layout-Layer 3

<!-- image -->

Figure 7. MAX8646 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8646 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------|-----------------|
|                 0 | 10/06           | Initial release                                                          | -               |
|                 1 | 6/08            | Changed value of soft-start capacitor C8 to incorporate prebias feature. | 1, 3, 4         |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7
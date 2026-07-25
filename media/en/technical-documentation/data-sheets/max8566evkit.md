<!-- lastmod 2022-08-02 -->
## General Description

The MAX8566 evaluation kit (EV kit) demonstrates the MAX8566 integrated 10A step-down converter. The EV kit generates a 1.8V output voltage at load currents up to  10A from a 2.3V to 3.6V input voltage range. The MAX8566 switches at 1MHz and provides over 95% efficiency with the supplied components.

The MAX8566 EV kit comes fully assembled and tested

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX8566EVKIT | EV Kit |

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C1, C2        |     2 | 47µF ±20%, 6.3V X7R ceramic capacitors (1210) Taiyo Yuden JMK325BJ476MM or equivalent |
| C3            |     1 | 0.22µF ±10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A224K or equivalent        |
| C4            |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475K or equivalent        |
| C5            |     1 | 0.047µF, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E473K or equivalent            |
| C6, C7        |     2 | 22µF ±20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J226M or equivalent        |
| C8, C9        |     2 | 2200pF ±10%, 50V X7R ceramic capacitors (0402) TDK C1005X7R1H222K or equivalent       |

<!-- image -->

## Features

- ♦ Internal 8m Ω On-Resistance MOSFETs
- ♦ 10A Output PWM Step-Down Regulator
- ♦ ±1% Output Accuracy Over Load, Line, and Temperature
- ♦ Operates from 2.3V to 3.6V Input Supply
- ♦ Adjustable Output from 0.6V to (0.87 x VIN)
- ♦ 250kHz to 2.4MHz Adjustable Frequency or SYNC Input
- ♦ Allows All Ceramic Capacitor Design
- ♦ SYNCOUT Drives 2nd Regulator 180° Out-of-Phase
- ♦ Prebiased or Monotonic Soft-Start
- ♦ Programmable Soft-Start Time
- ♦ Output Tracking or Sequencing
- ♦ 32-Lead, 5mm x 5mm Thin QFN Package
- ♦ REFIN for DDR Termination Applications
- ♦ Surface-Mount Components
- ♦ Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                      |
|---------------|-------|--------------------------------------------------------------------------------------------------|
| C10           |     1 | 120pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM36C0G121J50D50 or equivalent               |
| C11           |     1 | 0.022µF ±10%, 16V X7R ceramic capacitor (0402) TDK C1005X7R1C223K or equivalent                  |
| C12           |     0 | Not installed, ceramic capacitor                                                                 |
| C13           |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H332K or equivalent                   |
| C14           |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0805) Taiyo Yuden UMK212BJ104KG or equivalent             |
| JU1           |     1 | 2-pin header 36-pin header, 0.01in center (comes in 36-pin strips, cut to fit) Sullins PTC36SAAN |
| L1            |     1 | 0.39µH, 2.51m Ω , 16.3A inductor 7.6mm x 6.8mm x 5mm TOKO FDU0650-0R39                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8566 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                     |
|---------------|-------|---------------------------------|
| R1            |     1 | 10 Ω ±5% resistor (0402)        |
| R2            |     1 | 20k Ω ±5% resistor (0402)       |
| R3            |     1 | 49.9k Ω ±1% resistor (0402)     |
| R4            |     1 | 100 Ω ±5% resistor (0402)       |
| R5            |     1 | 4.02k Ω ±1% resistor (0402)     |
| R6            |     1 | 2.00k Ω ±1% resistor (0402)     |
| R7            |     1 | 2.49k Ω ±1% resistor (0402)     |
| R8            |     1 | 2.4 Ω ±5% resistor (0603)       |
| R9, R10       |     0 | Not installed, resistors (0402) |

## Procedure

The MAX8566 application circuit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Preset the DC power supply to 3.3V. Turn off the power supply. Do not turn on the power supply until all connections are made.
- 2) Remove the shunt from JU1.
- 3) Connect the positive lead of the power supply to the VIN pad on the EV kit and connect the negative lead of the power supply to the GND pad on the EV kit.

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                         |
|---------------|-------|-----------------------------------------------------|
| R11           |     1 | 10k Ω ±5% resistor (0402)                           |
| R12           |     1 | 100k Ω ±5% resistor (0402)                          |
| U1            |     1 | 10A step-down converter (32 TQFN) Maxim MAX8566ETJ+ |
| -             |     1 | Shunt Sullins STC02SYAN Digi-Key S9000-ND           |
| -             |     1 | PCB: MAX8566 Evaluation Kit                         |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselectronics.com  |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate you are using the MAX8566 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 2V to 4V at +10A variable DC power supply or battery
- Digital multimeter (DMM)
- 10A load
- Ammeter (optional)
- 4) Connect the positive lead of the DMM to the VOUT pad on the EV kit and connect the negative lead of the DMM to the GND pad on the EV kit.
- 5) Turn on the power supply.
- 6) Verify that the voltage at VOUT is approximately 1.8V.
- 7) Connect a 10A load between VOUT and GND.
- 8) Verify that the voltage at VOUT is approximately 1.8V.
- 9) If  performing transient response testing, it is recommended to add at least 270µF electrolitic capacitance to the input between the GND and VIN pads of the EV kit to prevent overshoot.

## Detailed Description of Hardware

## Evaluating Other Output Voltages

The MAX8566 EV kit comes preset to a 1.8V output voltage. The output of the MAX8566 is adjustable down to 0.6V. To adjust the output voltage, replace R6 with a 1% resistor with a value corresponding to the equation:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Note that VOUT cannot exceed VIN and is limited by the maximum duty cycle of the MAX8566.

Refer to the MAX8566 IC data sheet for information on selecting inductor, output capacitor, and compensation components to optimize the circuit for different output voltages.

## Evaluating Other Switching Frequencies (FREQ)

The MAX8566 EV kit comes preset with a 1MHz switching frequency. Replace R3 to change the switching frequency. R3 is calculated as:

<!-- formula-not-decoded -->

where the switching frequency (fS) is in Hz and must be between 250kHz and 2.4MHz.

Refer to the MAX8566 IC data sheet for information on selecting inductor, output capacitor, and compensation components to optimize the circuit for different switching frequencies.

## Using the REFIN Input

The MAX8566 features an external reference input (REFIN). The IC regulates FB to the voltage applied to REFIN. The internal soft-start is not available when

<!-- image -->

## MAX8566 Evaluation Kit

using an external reference. A method of soft-start when using an external reference is shown in Figure 2 of the MAX8566 IC data sheet. To use the REFIN input of  the  EV  kit,  cut  the  trace  that  shorts  R9.  Connect  a power supply to the REFIN pad on the EV kit.

## Power Good (PWRGD)

PWRGD is an open-drain output that goes high impedance once the soft-start ramp has concluded, provided VFB is above 0.54V. PWRGD pulls low when VFB is below 0.54V for at least 50µs. PWRGD is low during shutdown. PWRGD is pulled up to VDD through R2.

## SYNC and SYNCOUT

The MAX8566 provides a SYNC input that allows the IC to  be  synchronized to an external clock frequency of 250kHz to 2.4MHz. The clock frequency of the signal applied to SYNC must be faster than the internal oscillator.  The  SYNCOUT output is provided to operate a second regulator 180° out-of-phase.

## Jumper Settings

Jumper JU1 Function (Shutdown Mode) The MAX8566 features a shutdown mode to minimize the quiescent current. To shut down the IC, place a shunt between pins 1-2 of JU1. For normal operation, remove the shunt from JU1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8566 Evaluation Kit

Figure 1. MAX8566 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX8566 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX8566 EV Kit PCB Layout-Layer 2

<!-- image -->

## MAX8566 Evaluation Kit

Figure 3. MAX8566 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX8566 EV Kit PCB Layout-Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8566 Evaluation Kit

Figure 6. MAX8566 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8566 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------|-----------------|
|                 0 | -               | Initial release                          | -               |
|                 1 | 6/08            | Changed value of compensation capacitor. | 1, 4            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7
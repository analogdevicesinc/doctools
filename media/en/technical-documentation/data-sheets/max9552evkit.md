<!-- lastmod 2022-08-03 -->
## General Description

The MAX9552 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  that  contains  a MAX9552 IC. The MAX9552 has four high-current VCOM drive buffers for TFT LCDs. The outputs are capable of driving large capacitive loads and settle to within 0.1% of VOUT in less than 2µs. The MAX9552 operates from a 7V to 20VDC power supply. Each channel can source or sink 800mA of transient load current.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 25V X5R ceramic capacitor (1210) TDK C3225X5R1E106M  |
| C2            |     1 | 0.1µF ±10%, 25V X5R ceramic capacitor (0402) TDK C1005X5R1E104K |
| C3-C6         |     4 | 1µF ±20%, 25V X5R ceramic capacitors (0603) TDK C1608X5R1E105M  |
| R1-R8         |     8 | 10k Ω ±1% resistors (0603)                                      |
| U1            |     1 | MAX9552EUD+ (14-pin TSSOP-EP)                                   |
| -             |     1 | MAX9552 EV kit PCB                                              |

<!-- image -->

## Features

- ♦ Single 7V to 20VDC Power-Supply Operation
- ♦ Source or Sink 800mA Transient Load Current per Channel
- ♦ 0.1% Settling Time (less than 2 µ s)
- ♦ Four Buffers per Package
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE        | IC PACKAGE   |
|---------------|-------------------|--------------|
| MAX9552EVKIT+ | 0 ° C to +70 ° C* | 14 TSSOP     |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9552 when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX9552 Evaluation Kit

## Quick Start

## Recommended Equipment

- 7V to 20V, 5ADC power supply (VDD)
- One voltmeter

## Procedure

The MAX9552 EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Use low-impedance cables to connect the power supply to the VDD and GND pads on the EV kit. Do not turn on the power supply until all connections are completed.

- 1) Set the power-supply output to 16V and turn off the power supply.
- 2) Connect the power-supply ground to the GND pad on the EV kit.
- 3) Connect the power-supply output to the VDD pad on the EV kit.
- 4) Turn on the power supply.
- 5) Verify that all the outputs (OUTA, OUTB, OUTC, and OUTD) are approximately 8V.
- 6) Use low-impedance cables when connected to external loads.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX9552 EV kit is a fully assembled and tested surface-mount PCB that contains a MAX9552 IC. The MAX9552 is a quadruple high-current VCOM buffer for driving TFT LCDs. Each buffer is capable of sourcing or sinking large transient load current to quickly restore the VCOM voltage, making the MAX9552 an ideal buffer for driving large capacitive loads in TFT LCDs.

The MAX9552 EV kit outputs (OUTA, OUTB, OUTC, and OUTD) are set to VDD / 2 by voltage-divider resistors R1-R8, respectively. To set the outputs to other voltages (from 2V to VDD - 2V), select different voltagedivider resistors.

The MAX9552 EV kit provides four test points (INA-, INB-, INC-, and IND-) to accept external feedback from a remote-sense node, and then applies it to the negative input terminals of the buffers. To use external feedback sensing, cut open the PCB trace that runs directly between the respective negative input test point and the output pad, and connect the external feedback sense line to the selected test point (INA-, INB-, INC-, and IND-).

<!-- image -->

## MAX9552 Evaluation Kit

<!-- image -->

Figure 1. MAX9552 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9552 Evaluation Kit

<!-- image -->

Figure 2. MAX9552 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9552 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9552 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4
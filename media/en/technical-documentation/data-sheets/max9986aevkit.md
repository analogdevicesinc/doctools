<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX9986A evaluation kit (EV kit) simplifies the evaluation of the MAX9986A 815MHz to 1000MHz base-station downconversion mixer. It is fully assembled and tested at  the  factory.  Standard 50 Ω SMA connectors are included on the EV kit's input and output ports to allow quick and easy evaluation on the test bench.

This document provides a list of test equipment required to evaluate the device, a straightforward test procedure to  verify  functionality,  a  description  of  the  EV  kit  circuit, the circuit schematic, a bill of materials (BOM) for the kit, and artwork for each layer of the PCB.

| DESIGNATION                   |   QTY | DESCRIPTION                                                             |
|-------------------------------|-------|-------------------------------------------------------------------------|
| C1                            |     1 | 10pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H100J        |
| C2, C4, C7, C8, C10, C11, C12 |     7 | 82pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H820J       |
| C3, C5, C6, C9, C13, C14      |     6 | 0.01µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K    |
| C15                           |     1 | 220pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H221J       |
| J1- J4                        |     4 | PCB edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| L1, L2        |     2 | 330nH ±5% wire-wound inductors (0805) Coilcraft 0805CS-331XJBC |
| L3 †          |     1 | 30nH ±5% wire-wound inductor (0603) Coilcraft 0603CS-30NXJBC   |
| R1            |     1 | 953 Ω ±1% resistor (0603) Any                                  |
| R2            |     1 | 619 Ω ±1% resistor (0603) Any                                  |
| R3            |     1 | 0 Ω resistor (1206) Any                                        |
| R4            |     1 | 47k Ω ± 5% resistor (0603)                                     |
| T1            |     1 | 4:1 transformer (200:50) Mini-Circuits TC4-1W-7A               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Fully Assembled and Tested
- ♦ 815MHz to 1000MHz RF Frequency
- ♦ 960MHz to 1180MHz LO Frequency
- ♦ 50MHz to 250MHz IF Frequency
- ♦ 8.2dB Conversion Gain
- ♦ +25dBm IIP3
- ♦ 10dB Noise Figure
- ♦ Integrated LO Buffer
- ♦ Switch-Selectable (SPDT), Two LO Inputs
- ♦ -3dBm to +3dBm LO Drive
- ♦ 49dB LO1 to LO2 Isolation
- ♦ 50 Ω SMA Connectors on Input and Output Ports
- ♦ 4:1 Balun for Single-Ended IF Output

## Ordering Information

| PART          | TEMP RANGE             | IC PACKAGE      |
|---------------|------------------------|-----------------|
| MAX9986AEVKIT | T C = -40°C to +85°C** | 20 Thin QFN-EP* |

## MAX9986A Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                                                                               |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TP1           |     1 | Large test point for 0.062in PCB (red) Mouser 151-107-RC or equivalent                                                                                                                                                    |
| TP2           |     1 | Large test point for 0.062in PCB (black) Mouser 151-103-RC or equivalent                                                                                                                                                  |
| TP3           |     1 | Large test point for 0.062in PCB (white) Mouser 151-101-RC or equivalent                                                                                                                                                  |
| U1            |     1 | Active mixer IC (5mm x 5mm, 20-pin QFN, EP) Maxim MAX9986AETP+ NOTE: U1 HAS AN EXPOSED PADDLE CONDUCTOR THAT REQUIRES IT TO BE SOLDER ATTACHED TO A GROUNDED PAD ON THE PCB TO ENSURE A PROPER ELECTRICAL/THERMAL DESIGN. |

+ Denotes lead-free package.

## Component Suppliers

| SUPPLIER      | PHONE        | WEBSITE                   |
|---------------|--------------|---------------------------|
| Coilcraft     | 800-322-2645 | www.coilcraft.com         |
| Digi-Key      | 800-344-4539 | www.digikey.com           |
| Johnson       | 507-833-8822 | www.johnsoncomponents.com |
| Mini-Circuits | 718-934-4500 | www.minicircuits.com      |
| Murata        | 770-436-1300 | www.murata.com            |

Note: Indicate that you are using the MAX9986A when contacting these component suppliers.

## Quick Start

The MAX9986A EV kit is fully assembled and factory tested.  Follow  the  instructions  in  the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify the operation of the MAX9986A. It is intended as a guide only, and substitutions may be possible:

- One DC supply capable of delivering +5.0V and 300mA
- Three RF signal generators capable of delivering 10dBm of output power in the 700MHz to 1500MHz frequency range (i.e., HP 8648)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- One RF spectrum analyzer with a minimum 100kHz to 3GHz frequency range (HP 8561E)
- One RF power meter (HP 437B)
- One power sensor (HP 8482A)

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to prevent damaging the outputs by driving high-VSWR loads, do not turn on DC power or RF signal generators until all connections are made.

This procedure is specific to operation at an RF frequency of 910MHz using high-side injected LO for a 160MHz IF. Choose the test frequency based on the particular system's frequency plan, and adjust the following procedure accordingly. See Figure 1 for the mixer test setup diagram:

- 1) Calibrate the power meter for 910MHz. For safety margin, use a power sensor rated to at least +20dBm, or use padding to protect the power head as necessary.
- 2) Connect 3dB pads to the DUT ends of each of the three RF signal generators' SMA cables. This padding improves VSWR and reduces the errors due to mismatch.
- 3) Use the power meter to set the RF signal generators according to the following:
- RF signal source: -5dBm into DUT at 910MHz (this will be approximately -2dBm  before the 3dB pad).
- LO1 signal source: 0dBm into DUT at 1070MHz (this will be approximately 3dBm before the 3dB pad).
- LO2 signal source: 0dBm into DUT at 1069MHz (this will be approximately 3dBm before the 3dB pad).
- 4) Disable the signal generator outputs.
- 5) Connect the RF source (with pad) to RFIN.
- 6) Connect the LO1 and LO2 signal sources to the EV kit's LO1 and LO2 inputs, respectively.
- 7) Measure the loss in the 3dB pad and cable that will be connected to IFOUT. Losses are frequency dependent, so test this at 160MHz (the IF frequency). Use this loss as an offset in all output power/gain calculations.
- 8) Connect this 3dB pad to the EV kit's IFOUT connector and connect a cable from the pad to the spectrum analyzer.

<!-- image -->

## MAX9986A Evaluation Kit

- 9) Set the DC supply to +5.0V, and set a current limit of  approximately 300mA, if possible. Disable the output voltage and connect the supply to the EV kit (through an ammeter, if desired). Enable the supply. Readjust the supply to get +5.0V at the EV kit. There is a voltage drop across the ammeter when the mixer is drawing current.
- 10) Select LO1 by connecting LOSEL (TP3) to GND.
- 11) Enable the LO and the RF sources.

## Testing the Mixer

Adjust the center and span of the spectrum analyzer to observe the IF output tone at 160MHz. The level should be approximately +0.2dBm (8.2dB conversion gain, 3dB pad loss). There is also a tone at 159MHz, due to the LO signal applied to LO2. The amount of suppression between the 160MHz and 159MHz signals is the LO switch isolation. Note that the spectrum analyzer's absolute magnitude accuracy is typically no better than ±1dB. If accuracy is required, use the power meter to measure the absolute single-tone power level.

Disconnect the GND connection to LOSEL. It is pulled high by a pullup resistor on the board, selecting LO2. Observe that the 159MHz signal increases while the 160MHz decreases. Reconfigure the test setup using a combiner or hybrid to apply two RF signals at RFIN to do a two-tone IP3 measurement, if desired. Terminate the unused LO input in 50 Ω .

## Detailed Description

The MAX9986A is a high-linearity downconverter integrated with RF and LO baluns, an LO buffer, an IF amplifier, and an SPDT LO input select switch. The EV kit circuit consists mostly of supply-decoupling capacitors,  DC-blocking capacitors, an IF balun, and inductive  chokes. The MAX9986A EV kit circuit allows for thorough analysis and a simple design-in.

## Supply-Decoupling Capacitors

Capacitors C2, C7, C8, and C11 are 82pF supplydecoupling capacitors used to filter high-frequency noise. C3, C6, and C9 are larger 0.01µF capacitors used for filtering lower frequency noise on the supply.

## DC-Blocking Capacitors

The MAX9986A has internal baluns at the RF and LO inputs. These inputs have almost 0 Ω resistance at DC, so DC-blocking capacitors C1, C10, and C12 are used to prevent any external bias from being shunted directly to ground.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## LO Bias and IF Bias

Bias currents for the integrated IF amplifier and the LO buffer are set with resistors R1 (953 Ω ± 1%) and R2 (619 Ω ± 1%), respectively. These values were carefully chosen during factory testing for optimum linearity and minimal supply current. The DC currents can be reduced by increasing the values of R1 and R2, but the device would operate at reduced performance levels (see the Modifying the EV Kit section).

## Current-Limiting Resistor

Resistor R3 can be used for current-limiting at the supply.

## Tap Network

Capacitor C5 helps to terminate the second-order intermodulation products.

## LEXT

The 30nH wire-wound inductor, L3, improves LO-to-IF and RF-to-IF isolation. If isolation is not critical, then this pin can be grounded by shorting LEXT to ground through a 0 Ω resistor.

## IF ±

The MAX9986A employs a differential IF output to offer increased IP2 system performance. The EV kit uses a 4:1 balun to transform the 200 Ω differential  output impedance to a 50 Ω single-ended output for easy bench evaluation. Inductive chokes L1 and L2 provide DC bias to the IF output amplifier, C13 and C14 for supply filtering.

As the differential IF outputs are relatively high impedance (200 Ω ),  they are more susceptible to component parasitics. It  is  often  good  practice  to  minimize  the ground plane directly underneath large components to reduce associated shunt-C parasitics.

## LOSEL

The EV kit includes a 47k Ω pullup resistor for easy selection of the LO port. Providing a ground at TP3 selects LO1, and leaving TP3 open selects LO2. To drive TP3 from an external source, follow the limits called out in the MAX9986A device data sheet. Logic voltages should not be applied to LOSEL without the +5V supply voltage. Doing so causes the on-chip ESD diodes to conduct and could damage the device.

## MAX9986A Evaluation Kit

## Layout Considerations

The MAX9986A evaluation board can be a guide for your board layout. Pay close attention to thermal design and close  placement  of  components  to  the  IC.  The MAX9986A package exposed paddle (EP) conducts heat from the device and provides a low-impedance electrical connection to the ground plane. The EP MUST be attached to the PCB ground plane with a low-thermal and electrical impedance contact. Ideally, this is achieved by soldering the backside of the package directly to a top metal ground plane on the PCB. Alternatively, the EP can be connected to an internal or bottom-side ground plane using an array of plated vias directly below the EP. The MAX9986A EV kit uses nine evenly spaced, 0.016in-diameter, plated through holes

to connect the EP to the lower ground planes.

Depending on the ground-plane spacing, large surface-mount pads in the IF path may need to have the ground plane relieved under them to reduce parasitic shunt capacitance. The layout should be such to minmize the coupling from L1, L2, and L3.

## Modifying the EV Kit

The RF and LO inputs are broadband matched, so there is no need to modify the circuit for use anywhere in  the  815MHz to 1000MHz RF range (960MHz to 1180MHz LO range).

Retuning for a different IF is as simple as scaling the values of the IF pullup inductors up or down with frequency. The IF output looks like 200 Ω differential  in parallel with a capacitor. The capacitance is due to the combination of the IC, PCB, and external IF components. The capacitance from the IC is approximately 1pF to ground (0.5pF differential), while that from the PCB and external components is approximately 1pF to ground. The total 2pF of capacitance is resonated out at  the  frequency  of  interest  by  bias  inductors  L1  and L2.  To  determine the inductor value use the following equation:

<!-- formula-not-decoded -->

The IF output is tuned for operation at approximately 200MHz, so a 330nH inductor is used. For lower IF frequency (i.e., larger component values), maintain the component's Q value at the cost of larger case size, unless it is unavoidable.

The DC current of the device can be reduced, but the performance will be degraded.  Reducing the current is accomplished by increasing the values of R1 and R2. Resistor R1 sets the current in the IF amplifier, whereas R2 sets the current in the LO buffer that drives the mixer core.

Setting R1 to 953 Ω and R2 to 619 Ω results in IF and LO currents of 130mA and 71mA, respectively. Approximately 21mA of additional current is used in other circuits and cannot be reduced. To reduce these adjustable currents in half, double the values of R1 and R2. Doing so would reduce the current to approximately 130mA, but the gain and IP3 would drop approximately 0.3dB and 2.5dB, respectively. Some of the other performance values degrade or improve due to reduced current.

Since the linearity of the device is a result of the cascaded performance of the IF amplifier and the mixer, carefully choose the correct combination of R1 and R2 to produce the highest IP3 at the lowest desired current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9986A Evaluation Kit

Figure 1. Test Setup Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9986A Evaluation Kit

Figure 2. MAX9986A EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9986A Evaluation Kit

<!-- image -->

<!-- image -->

Figure 3. MAX9986A EV Kit PCB Layout-Top Silkscreen

<!-- image -->

Figure 4. MAX9986A EV Kit PCB Layout-Top Soldermask

Figure 5. MAX9986A EV Kit PCB Layout-Top Layer Metal

<!-- image -->

Figure 6. MAX9986A EV Kit PCB Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9986A Evaluation Kit

<!-- image -->

Figure 7. MAX9986A EV Kit PCB Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 8. MAX9986A EV Kit PCB Layout-Bottom Layer (Metal)

Figure 9. MAX9986A EV Kit PCB Layout-Bottom Soldermask

<!-- image -->

Figure 10. MAX9986A EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Heaney
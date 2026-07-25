<!-- lastmod 2022-08-02 -->
## General Description

The MAX2685 evaluation kit (EV kit) simplifies testing of the MAX2685. This EV kit allows evaluation of the lownoise amplifier (LNA) as well as the downconverter mixer.

## Component List

| DESIGNATION                              |   QTY | DESCRIPTION                                    |
|------------------------------------------|-------|------------------------------------------------|
| C1, C3, C5, C17                          |     4 | 0.1µF ceramic capacitors                       |
| C2, C14, C15                             |     0 | Not installed                                  |
| C4, C8                                   |     2 | 47pF ceramic capacitors                        |
| C6, C7, C10                              |     2 | 330pF ceramic capacitors                       |
| C9                                       |     1 | 3.3pF ceramic capacitor                        |
| C11, C18                                 |     2 | 6pF ±0.1pF ceramic capacitors                  |
| C12                                      |     1 | 1000pF ceramic capacitor                       |
| C13                                      |     1 | 12pF ±0.1pF ceramic capacitor                  |
| C16                                      |     1 | 10µF tantalum capacitor AVX TAJC106K016        |
| L1                                       |     1 | 12nH inductor Toko LL1608-SH12NK               |
| L2                                       |     1 | 680nH ±5% inductor Coilcraft 1008CS-681XJBC 5% |
| L3                                       |     1 | 820nH ±5% inductor Coilcraft 1008CS-821XJBC 5% |
| L4                                       |     1 | Not installed                                  |
| R1, R2                                   |     2 | 1k Ω resistors                                 |
| R3                                       |     1 | 75 Ω resistor                                  |
| R4                                       |     1 | 15k Ω resistor                                 |
| R5                                       |     1 | 0 Ω resistor                                   |
| R6, R7, R8                               |     3 | Not installed                                  |
| IFOUT+, IFOUT-, LNAIN, LNAOUT, LO, MIXIN |     6 | SMA connectors (PC edge mount)                 |
| JU1, JU2                                 |     2 | 3-pin headers                                  |
| GND, V CC                                |     2 | Eyelets                                        |
| U1                                       |     1 | MAX2685EEE (16-pin QSOP)                       |
| None                                     |     1 | MAX2685 PC board                               |

<!-- image -->

## Features

- ' +2.7V to +5.5V Single-Supply Operation
- ' 50 Ω SMA Inputs and Outputs
- ' Fully Assembled and Tested
- ' Allows Testing of All Device Functions

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2685EVKIT | -40°C to +85°C | 16 QSOP      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2685 EV kit is fully assembled and factory tested.  Follow  the  instructions  in  the Connections  and Setup section for proper device evaluation.

## Test Equipment Required

This section lists the equipment recommended for verifying the MAX2685's operation. It is intended as a guide only; some substitutions are possible.

- Two RF signal generators capable of delivering at least 0dBm of output power at frequencies to 2GHz (HP 8648C or equivalent). One generator is required for  the  local  oscillator  (LO)  source;  the  other  is required for the mixer and LNA RF input. Only one generator is required to operate the LNA.
- An RF spectrum analyzer that covers the MAX2685's operating frequency range (the HP 8561E, for example).
- A power supply that can provide up to 100mA at +2.7V to +5.5V.
- An ammeter for measuring the supply current (optional).
- Several 50 Ω SMA cables.

## Connections and Setup

This step-by-step guide explains how to get the EV kit operational and how to evaluate both the LNA and the downconverter mixer.

1

## MAX2685 Evaluation Kit

## Low-Noise Amplifier (LNA)

- 1) Connect the SHDN jumper (JU2) on the EV kit to the 'ON' position, SHDN = VCC. This enables the MAX2685.
- 2) Connect the GAIN jumper (JU1) on the EV kit to the 'HI'  position,  GAIN  =  VCC.  This  places  the  LNA  in high-gain mode.
- 3) Connect a 3V DC supply (through an ammeter, if desired) to the VCC and GND terminals on the EV kit.
- 4) Connect one RF signal generator to the LNAIN SMA connector. Do not turn on the generator's output. Set the generator for an output frequency of 880MHz and a power level of -30dBm.
- 5) Connect a spectrum analyzer to the LNAOUT SMA connector on the EV kit. Set the spectrum analyzer to  a  center  frequency of 880MHz, a total span of 200MHz, and a reference level of 0dBm.
- 6) Turn on the DC supply. The supply current should read approximately 8.5mA (if using an ammeter).
- 7) Activate the RF generator's output. An 880MHz signal should show on the spectrum analyzer's display and should indicate a typical gain of 15dB after accounting for cable losses.
- 8) Test the MAX2685's low gain mode by changing the output power on the signal generator to -10dBm and setting the GAIN jumper (JU1) on the EV kit to the 'LO' position, GAIN = GND. The supply current should read approximately 4mA (if using an ammeter). An 880MHz signal should show on the spectrum analyzer's display and should indicate an attenuation of 12dB after accounting for cable losses.
- 9) If  desired, test the shutdown feature by moving the SHDN jumper (JU1) into the 'OFF' position. This disables the part and reduces supply current below 1.0µA.

## Downconverter Mixer

- 1) Connect the GAIN jumper (JU1) on the EV kit to the 'HI' position, GAIN = VCC. This places the mixer in high-gain mode.
- 2) Remove the RF signal generator and spectrum analyzer from the LNAIN and LNAOUT connections. The DC supply connections needed for testing the mixer are the same as in the LNA section.
- 3) Connect one RF signal generator (with the output disabled) to the LO SMA connector. Set the frequency to 960MHz and the output power to -8dBm.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4) Connect the other RF signal generator (with the output disabled) to the MIXIN SMA connector. Set the frequency to 880MHz and the amplitude to -25dBm.
- 5) Connect the spectrum analyzer to the IFOUT+ SMA connector. Set the spectrum analyzer to an 80MHz center frequency, a 1MHz span, and a 0dBm reference level.
- 6) Turn on the LO and RF signal generators.
- 7) An 80MHz signal should show on the spectrum analyzer's display and should indicate a typical gain of 6.1dB after accounting for cable losses.
- 8) If desired, connect the GAIN jumper (JU1) on the EV kit  to  the  'LO'  position,  GAIN  =  GND.  This  places the mixer in low-gain mode. An 80MHz signal should appear on the spectrum analyzer's display and should indicate a typical gain of 4.6dB after accounting for cable losses.

## Detailed Description

The MAX2685 EV kit's circuitry is described in this section. For more detailed information about the operation of the device itself, refer to the MAX2685 data sheet.

## Low-Noise Amplifier

The LNA circuitry consists of matching networks and DC-blocking capacitors at the input and output.

## Downconverter Mixer RF Input

The downconverter mixer's RF input, MIXIN, requires a simple matching network. C10 provides DC blocking, and C9 is used to match the input to 50 Ω at 880MHz.

## Downconverter Mixer LO Input

The downconverter mixer's LO input is terminated with a 75 Ω resistor, R3, at the SMA input. C8 provides DC blocking.

## Downconverter Mixer Differential IF Output

The mixer output can be evaluated in either a singleended or differential configuration. The MAX2685 EV kit is  shipped with a differential to single-ended converter for single-ended testing. See the IF Output Configuration section.

<!-- image -->

## Gain Control and LNA Bypass Switch

Jumper JU1 controls the LNA bypass switch and the overall gain of the MAX2685. Enable the LNA and switch the device to high-gain mode by placing the GAIN jumper (JU1) into the 'HI' position, GAIN = VCC. Bypass the LNA and reduce the overall gain by placing the GAIN jumper (JU1) into the 'LO' position, GAIN = GND.

## Shutdown

Jumper JU2 controls the IC's operating modes. Enable the MAX2685 by connecting the SHDN pin to VCC. Do this by placing the shunt across pins 1 and 2 of jumper JU2. Shut down the MAX2685 by connecting the SHDN pin to GND. Do this by placing the shunt across pins 2 and 3 of jumper JU2.

## IF Output Configuration

The EV board contains a circuit that converts the MAX2685 mixer's differential output to a single-ended output. This is done with components L2, L3, C11, C13, C18, and R4. The resonant network composed of L2, C11, and C18 transforms the IFOUT- signal by 180° at IFOUT+. L3 is primarily a choke.

The 50 Ω match on the EV board was obtained by initially using a large value for C13 so it does not affect the impedance. Using a network analyzer calibrated between 70MHz and 90MHz, monitor S22 of the IF output. It is a high-resistance output that swings near the high-impedance end of the Smith chart. Adjust L2, C11, and C18 so that the network analyzer sweep crosses

<!-- image -->

## MAX2685 Evaluation Kit

the 50 Ω circle  at  the  desired  IF frequency, 80MHz. Choose the final value of the series capacitor, C13, to transform the impedance to the center of the Smith chart. This is a narrowband match. To reduce the Q of this match and make it more broadband, add R4. This is required to make the match manufacturable considering variations in component tolerance. In initially choosing the component values for the resonant network (L2, C11, and C18), note that increasing the value of  L2  makes the match more broadband. If a higher impedance output is desired to interface with a filter, C13 may not be required and you may set the output impedance with R4.

For a differential output, footprints for L4 and C15 are available on the EV board to establish a differential output on the board edge. In addition, footprints labeled as R5-R8 are available for other experimentation.

## PC Board Layout

Good PC board layout is an essential aspect of RF circuit design. The EV kit's PC board can serve as a guide for laying out a board using the MAX2685.

Each VCC node on the PC board has its own decoupling capacitor. This minimizes supply coupling from one section of the MAX2685 to another. A star topology for  the  supply  layout,  in  which  each  VCC node on the MAX2685 circuit has a separate connection to a central VCC node, can further minimize coupling between the LNA and mixer sections of the MAX2685.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2685 Evaluation Kit

Figure 1. MAX2685 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2685 Evaluation Kit

<!-- image -->

Figure 2. MAX2685 EV Kit Component Placement GuideComponent Side

Figure 3. MAX2685 EV Kit Pad Placement

<!-- image -->

<!-- image -->

Figure 4. MAX2685 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2685 Evaluation Kit

Figure 5. MAX2685 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 6. MAX2685 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->
<!-- lastmod 2022-08-02 -->
## General Description

The MAX1470 evaluation kit (EV kit) allows for a detailed evaluation of the MAX1470 superheterodyne receiver. It  enables testing of the device's RF performance and requires no additional support circuitry. The RF input uses a 50 Ω matching network and an SMA connector for convenient connection to test equipment. The EV kit can also directly interface to the user's embedded design for easy data decoding.

The MAX1470 EV kit comes in two versions: a 315MHz version and a 433.92MHz version. The passive components are optimized for these frequencies. These components can easily be changed to work at RF frequencies from 250MHz to 500MHz. In addition, the 5kbps data rate can be adjusted from 0kbps to 100kbps by changing two more components.

For easy implementation into the customer's design, the MAX1470 EV kit also features a proven PC board layout, which can be easily duplicated for quicker time to market. The EV kit Gerber files are available for download at www.maxim-ic.com.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1, C2, C12   |     3 | 0.01µF ± 10% ceramic capacitors (0603) Murata GRM188R71H103KA01         |
| C3            |     1 | 1500pF ± 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H152KA01 |
| C4            |     1 | 0.47µF +80% - 20% ceramic capacitor (0603) Murata GRM188F51C474ZA01     |
| C5            |     1 | 470pF ± 5% ceramic capacitor (0603) Murata GRM1885C1H471JA01            |
| C6, C10       |     2 | 220pF ± 5% ceramic capacitors (0603) Murata GRM1885C1H221JA01           |
| C7, C8, C11   |     3 | 100pF ± 5% ceramic capacitors (0603) Murata GRM1885C1H101JA01           |
| C9 (315MHz)   |     1 | 4.7pF ± 0.1pF ceramic capacitor (0603) Murata GRM1885C1H4R7BZ01         |

<!-- image -->

## Features

- ♦ Proven PC Board Layout (Compact 3cm ✕ 3cm)
- ♦ Proven Components Parts List
- ♦ Multiple Test Points Provided On-Board
- ♦ Available in 315MHz or 433.92MHz Optimized Versions
- ♦ 250MHz to 500MHz* Adjustable Frequency Range
- ♦ Fully Assembled and Tested
- ♦ Can Operate as a Stand-Alone Receiver with Addition of an Antenna

* Requires component changes.

## Ordering Information

| PART             | TEMP RANGE     | IC PACKAGE   |
|------------------|----------------|--------------|
| MAX1470EVKIT-315 | -40°C to +85°C | 28 TSSOP     |
| MAX1470EVKIT-433 | -40°C to +85°C | 28 TSSOP     |

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                       |
|--------------------|-------|-----------------------------------------------------------------------------------|
| C9 (433MHz)        |     1 | 3.0pF ± 0.1pF ceramic capacitor (0603) Murata GRM1885C1H3R0BD01                   |
| C13, C16, C18, C19 |     0 | Not installed                                                                     |
| C14, C15           |     2 | 15pF ± 5%, 50V ceramic capacitors (0603) Murata GRM1885C1H150JZ01                 |
| C17                |     0 | 0.1µF +80% - 20% ceramic capacitor (0603) Murata GRM188R71H103KA01, not installed |
| F_IN               |     1 | SMA connector edge mount, not installed EFJohnson 142-0701-801                    |
| JU1                |     1 | 3-pin header Digi-Key S1012-36-ND or equivalent                                   |
| -                  |     1 | Shunt (JU1) Digi-Key S9000-ND or equivalent                                       |
| JU3, JU4           |     0 | Not installed                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1470 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| L1 (315MHz)   |     1 | 27nH ± 5% inductor (0603) Murata LQG18HN27NJ00                       |
| L1 (433MHz)   |     1 | 15nH ± 5% inductor (0603) Murata LQG18HN15NJ00                       |
| L2 (315MHz)   |     1 | 120nH ± 5% inductor (0603) Toko LL1608FSR12J or Murata LQW18ANR12J00 |
| L2 (433MHz)   |     1 | 68nH ± 5% inductor (0603) Toko LL1608FH68J or Murata LQG18HN68NJ00   |
| L3            |     1 | 15nH ± 5% inductor (0603) Murata LQG18HN15NJ00                       |
| R1            |     1 | 5k Ω resistor (0603) Any supplier                                    |
| R2, R4        |     0 | Resistor (0603), not installed                                       |
| R3            |     0 | 270 Ω resistor (0603), not installed Any supplier                    |
| R5            |     1 | 10k Ω resistor (0603) Any supplier                                   |
| RF_IN         |     1 | SMA connector top mount EFJohnson 142-0701-201                       |

## Component Suppliers

| SUPPLIER           | PHONE         | FAX           |
|--------------------|---------------|---------------|
| Crystek            | 800-237-3061  | 941-561-1025  |
| Hong Kong Crystals | 852-2412-0121 | 852-2498-5908 |
| Murata             | 800-831-9172  | 814-238-0490  |
| Toko               | 408-432-8281  | 408-943-9790  |

Note: Please indicate that you are using the MAX1470 when contacting these component suppliers.

## Quick Start

The following procedure allows for proper device evaluation.

## Required Test Equipment

- Regulated power supply capable of providing 3.3V
- RF signal generator capable of delivering from -120dBm to 0dBm of output power at the operating frequency, in addition to AM or pulse-modulation capabilities (Agilent E4420B or equivalent)

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's functionality. Do not turn  on  the  DC  power or RF signal generator until all connections are made:

- 1) Connect a DC supply set to 3.3V (through an ammeter, if desired) to the 3.3V and GND terminals on the EV kit. Do not turn on the supply.
- 2) Connect the RF signal generator to the RF\_IN SMA connector. Do not turn on the generator output. Set the generator for an output frequency of 315MHz (or  433.92MHz) at a power level of -100dBm. Set the modulation of the generator to provide a 2kHz, 100% AM-modulated square wave (or a 2kHz pulse-modulated signal).
- 3) Connect the oscilloscope to test point TP3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Component List (continued)

| DESIGNATION                    |   QTY | DESCRIPTION                                                                   |
|--------------------------------|-------|-------------------------------------------------------------------------------|
| MIX_OUT                        |     0 | SMA connector top mount, not installed EFJohnson 142-0701-201                 |
| TP1, TP2, TP4-TP8              |     0 | Not installed                                                                 |
| 3.3V, GND, SHDN, DATA_OUT, TP3 |     5 | Test points Mouser 151-203 or equivalent                                      |
| Y1 (315MHz)                    |     1 | Crystal 4.754687MHz Hong Kong Crystals SSL4754687E03FAFZ8A0 or Crystek 016867 |
| Y1 (433MHz)                    |     1 | Crystal 6.6128 MHz Hong Kong Crystals SSL6612813E03FAFZ8A0 or Crystek 016868  |
| Y2                             |     1 | 10.7MHz ceramic filter Murata SFTLA10M7FA00-B0                                |
| U1                             |     1 | MAX1470EUI                                                                    |
| -                              |     1 | MAX1470 EV kit PC board                                                       |

- Optional ammeter for measuring supply current
- Oscilloscope

- 4) Turn on the DC supply. The supply current should read approximately 6mA.
- 5) Activate the RF generator's output without modulation.  The  scope should display a DC voltage that varies from approximately 1.2V to 2.0V as the RF generator amplitude is changed from -115dBm to -50dBm.
- 6) Set the RF generator to -100dBm. Activate the RF generator's modulation and set the scope's coupling to AC. The scope now displays a lowpass-filtered square wave at TP3 (filtered analog baseband data). Use the RF generator's LF OUTPUT (modulation output) to trigger the oscilloscope.
- 7) Monitor the DATA\_OUT terminal and verify the presence of a 2kHz square wave.

## Additional Evaluation

- 1) With the modulation still set to AM, observe the effect of reducing the RF generator's amplitude on the DATA\_OUT terminal output. The error in this sliced digital signal increases with reduced RF signal  level.  The  sensitivity  is  usually  defined  as  the point at which the error in interpreting the data (by the following embedded circuitry) increases beyond a set limit (BER test).
- 2) With the above settings, a 315MHz-tuned EV kit should display a sensitivity of about -118dBm (1% BER), while a 433.92MHz kit displays a sensitivity of about -114dBm (1% BER). Note: The above sensitivity  values  are  given  in  terms  of  average  carrier power. If true pulse modulation is used instead of AM, then the sensitivity measurement is in terms of peak power, and as a result is reduced by 6dB.

## Table 1. Jumper Function Table

| JUMPER   | STATE   | FUNCTION                                |
|----------|---------|-----------------------------------------|
| JU1      | 1-2     | Normal operation                        |
| JU1      | 2-3     | Power-down mode                         |
| JU1      | N.C.    | External power-down control             |
| JU3      | 1-2     | Mixer output to MIX_OUT                 |
| JU3      | 2-3     | External IF input                       |
| JU3      | N.C.    | Normal operation                        |
| JU4      | 1-2     | Uses PDOUT for faster receiver startup  |
| JU4      | 2-3     | GND connection for peak detector filter |

<!-- image -->

## MAX1470 Evaluation Kit

- 3) Use capacitors C5 and C6 to set the corner frequency of the 2nd-order lowpass Sallen-Key data filter. The current values were selected for a corner frequency of 5kHz. Adjusting these values accommodates higher data rates (refer to the MAX1470 data sheet for more details).

## Layout Issues

A properly designed PC board is an essential part of any RF/microwave circuit. On high-frequency inputs and outputs, use controlled-impedance lines and keep them as short as possible to minimize losses and radiation. At high frequencies, trace lengths that are approximately 1/20 the wavelength or longer become antennas. For example, a 2in trace at 315MHz can act as an antenna.

Keeping the traces short also reduces parasitic inductance. Generally, 1in of a PC board trace adds about 20nH of parasitic inductance. The parasitic inductance can have a dramatic effect on the effective inductance. For example, a 0.5in trace connecting a 100nH inductor adds an extra 10nH of inductance, or 10%.

To reduce the parasitic inductance, use wider traces and a solid ground or power plane below the signal traces. Using a solid ground plane can reduce the parasitic inductance from approximately 20nH/in to 7nH/in. Also, use low-inductance connections to ground on all GND pins, and place decoupling capacitors close to all VDD connections.

The EV kit PC board can serve as a reference design for laying out a board using the MAX1470. All required components have been enclosed in a 1.25in x 1.25in square, which can be directly 'inserted' in the application circuit.

## Table 2. Test Points

|   TP | DESCRIPTION                                                                                  |
|------|----------------------------------------------------------------------------------------------|
|    1 | PLL control voltage ( Note: Connecting anything to this test point degrades RF performance.) |
|    2 | Data slicer negative input                                                                   |
|    3 | Data slicer positive input                                                                   |
|    4 | Peak detector out                                                                            |
|    5 | VDD                                                                                          |
|    6 | GND                                                                                          |
|    7 | Data filter feedback node                                                                    |
|    8 | Data out                                                                                     |
|    9 | Power-down select input                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1470 Evaluation Kit

## Detailed Description

## Power-Down Control

The MAX1470 can be controlled externally using the SHDN connector. The IC draws approximately 1.25µA in shutdown mode. Jumper JU1 is used to control this mode. The shunt can be placed between pins 2 and 3 for continuous shutdown, or pins 1 and 2 for continuous operation. Remove the JU1 shunt for external control. See Table 1 for the jumper function descriptions.

## IF Input/Output

The 10.7MHz IF can be monitored with the help of a spectrum analyzer using the MIX\_OUT SMA (not provided). Remove the ceramic filter for such a measurement and include R3 (270 Ω )  and C17 (0.01µF) to match the 330 Ω mixer output with the 50 Ω spectrum analyzer. Jumper JU3 needs to connect pins 1 and 2. It is also possible to use the MIX\_OUT SMA to inject an external IF as a means of evaluating the baseband data slicing section. Jumper JU3 needs to connect pins 2 and 3.

## F\_IN External Frequency Input

For applications where the correct frequency crystal is not available, it is possible to directly inject an external frequency through the F\_IN SMA (not provided). Connect the SMA to a function generator. The addition of C18 and C19 is necessary (use 0.01µF capacitors).

## Test Points and I/O Connections

Additional test points and I/O connectors are provided to monitor the various baseband signals and for external connections. See Tables 2 and 3.

Figure 1. MAX1470 EV Kit

<!-- image -->

## Table 3. I/O Connectors

| SIGNAL   | DESCRIPTION                        |
|----------|------------------------------------|
| RF_IN    | RF input                           |
| F_IN     | External reference frequency input |
| MIX_OUT  | IF input/output                    |
| GND      | Ground                             |
| 3.3V     | 3.3V power input                   |
| DATA_OUT | Sliced data output                 |
| SHDN     | External power-down control        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1470 Evaluation Kit

<!-- image -->

Figure 2. MAX1470 EV Kit Circuit Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1470 Evaluation Kit

<!-- image -->

Figure 3. MAX1470 EV Kit Component Placement Guide-Top Silkscreen

Figure 4. MAX1470 EV Kit PC Board Layout-Top Copper

<!-- image -->

Figure 5. MAX1470 EV Kit PC Board Layout -Bottom Copper

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6
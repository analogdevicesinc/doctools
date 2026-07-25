<!-- lastmod 2022-08-02 -->
## General Description

The MAX1473 evaluation kit (EV kit) allows for a detailed evaluation of the MAX1473 superheterodyne receiver. It  enables testing of the device's RF performance and requires no additional support circuitry. The RF input uses a 50 Ω matching network and an SMA connector for convenient connection to test equipment. The EV kit can also directly interface to the user's embedded design for easy data decoding.

The MAX1473 EV kit comes in two versions: a 315MHz version and a 433.92MHz version. The passive components are optimized for these frequencies. These components can easily be changed to work at RF frequencies from 300MHz to 450MHz. In addition, the 5kbps data rate received can be adjusted from 0 to 100kbps by changing two more components.

For easy implementation into the customer's design, the MAX1473 EV kit also features a proven PC board layout, which can be easily duplicated for quicker time-tomarket. The EV kit Gerber files are available for download at www.maxim-ic.com.

| DESIGNATION        |   QTY | DESCRIPTION                                                             |
|--------------------|-------|-------------------------------------------------------------------------|
| C1, C2             |     2 | 0.01µF ± 10% ceramic capacitors (0603) Murata GRM188R71H103KA01         |
| C3                 |     1 | 1500pF ± 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H152KA01 |
| C4                 |     1 | 0.47µF +80% - 20% ceramic capacitor (0603) Murata GRM188F51C474ZA01     |
| C5                 |     1 | 470pF ± 5% ceramic capacitor (0603) Murata GRM1885C1H471JA01            |
| C6, C10            |     2 | 220pF ± 5% ceramic capacitors (0603) Murata GRM1885C1H221JA01           |
| C7, C8, C11        |     3 | 100pF ± 5% ceramic capacitors (0603) Murata GRM1885C1H101JA01           |
| C9 (315MHz)        |     1 | 4pF ± 0.1pF ceramic capacitor (0603) Murata GRM1885C1H4R0BZ01           |
| C9 (433MHz)        |     1 | 2.2pF ± 0.1pF ceramic capacitor (0603) Murata GRM1885C1H2R2BD01         |
| C12, C20           |     2 | 0.1µF ± 5% ceramic capacitors (0603) Murata GRM188R71C104KA01           |
| C13, C16, C18, C19 |     0 | Not installed                                                           |

- ♦ Proven PC Board Layout
- ♦ Proven Components Parts List
- ♦ Multiple Test Points Provided On-Board
- ♦ Available in 315MHz or 433.92MHz Optimized Versions
- ♦ Adjustable Frequency Range from 300MHz to 450MHz*
- ♦ Fully Assembled and Tested
- ♦ Can Operate as a Stand-Alone Receiver with Addition of an Antenna

*Requires component changes

## Ordering Information

| PART             | TEMP RANGE     | IC PACKAGE   |
|------------------|----------------|--------------|
| MAX1473EVKIT-315 | -40°C to +85°C | 28 TSSOP     |
| MAX1473EVKIT-433 | -40°C to +85°C | 28 TSSOP     |

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                        |
|--------------------|-------|------------------------------------------------------------------------------------|
| C14, C15           |     2 | 15pF ± 5%, 50V ceramic capacitors (0603) Murata GRM1885C1H150JZ01                  |
| C17                |     0 | 0.01µF +80% - 20% ceramic capacitor (0603), not installed Murata GRM188R71H103KA01 |
| C21                |     1 | 0 Ω resistor (0603)                                                                |
| F_IN               |     0 | SMA connector edge mount, not installed Johnson 142-0701-801                       |
| JU1, JU2, JU5, JU6 |     4 | 3-pin headers Digi-Key S1012-36-ND or equivalent                                   |
| JU7                |     1 | 2-pin header                                                                       |
| JU3, JU4           |     0 | Not installed                                                                      |
| JU8                |     1 | Shorted                                                                            |
| -                  |     5 | Shunts (JU1) Digi-Key S9000-ND or equivalent                                       |
| L1 (315MHz)        |     1 | 27nH ± 5% inductor (0603) Coilcraft 0603CS-27NXJB                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

## MAX1473 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| L1 (433MHz)   |     1 | 15nH ± 5% inductor (0603) Coilcraft 0603CS-15NXJB                            |
| L2 (315MHz)   |     1 | 120nH ± 5% inductor (0603) Coilcraft 0603CS-R12XJB                           |
| L2 (433MHz)   |     1 | 56nH ± 5% inductor (0603) Coilcraft 0603CS-56NXJB                            |
| L3            |     1 | 15nH ± 5% inductor (0603) Murata LQG18HN15NJ00                               |
| MIX OUT       |     0 | SMA connector top mount, not installed Digi-Key J500-ND Johnson 142-0701-201 |
| R1            |     1 | 5.1k Ω resistor (0603), any                                                  |
| R2, R4, R6    |     0 | Resistor (0603), not installed                                               |
| R3            |     0 | 270 Ω resistor (0603), any, not installed                                    |
| R5            |     1 | 10k Ω resistor (0603), any                                                   |
| R7            |     1 | 10pF ± 5%, 50V ceramic capacitor (0603) MurataGRM1885C1H100JZ01              |
| R8            |     1 | 10k Ω resistor (0603), any                                                   |

## Quick Start

The following procedure allows for proper device evaluation.

## Required Test Equipment

- Regulated power supply capable of providing +3.3V
- RF signal generator capable of delivering from -120dBm to 0dBm of output power at the operating frequency, in addition to AM or pulse-modulation capabilities (Agilent E4420B or equivalent)
- Optional ammeter for measuring supply current
- Oscilloscope

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's functionality. Do not turn  on  the  DC  power or RF signal generator until all connections are made:

- 1) Connect a DC supply set to +3.3V (through an ammeter, if desired) to the VDD and GND terminals on the EV kit. Do not turn on the supply.
- 2) Connect the RF signal generator to the RF\_IN SMA connector. Do not turn on the generator output. Set the generator for an output frequency of 315MHz (or 433.92MHz) at a power level of -100dBm. Set the modulation of the generator to provide a 2kHz 100%

## Component List (continued)

| DESIGNATION                   |   QTY | DESCRIPTION                                                                  |
|-------------------------------|-------|------------------------------------------------------------------------------|
| R9                            |     1 | 1000pF ± 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102KA01      |
| RF IN                         |     1 | SMA connector top mount Digi-Key J500-ND Johnson 142-0701-201                |
| TP2, TP4-TP12                 |     0 | Not installed                                                                |
| VDD, GND, SHDN, DATA_OUT, TP3 |     5 | Test points Mouser 151-203 or equivalent                                     |
| Y1 (315MHz)                   |     1 | Crystal 4.754687MHz Hong Kong Crystal SSL4754687E03FAFZ8A0 or Crystek 016867 |
| Y1 (433MHz)                   |     1 | Crystal 6.6128MHz Hong Kong Crystal SSL6612813E03FAFZ8A0 or Crystek 016868   |
| Y2                            |     1 | 10.7MHz ceramic filter Murata SFTLA10M7FA00-B0                               |
| U1                            |     1 | MAX1473EUI                                                                   |
| -                             |     1 | MAX1473 EV kit PC board                                                      |

AM-modulated square wave (or a 2kHz pulse-modulated signal).

- 3) Connect the oscilloscope to test point TP3.
- 4)  Turn  on  the  DC  supply.  The  supply  current  should read approximately 5mA.
- 5) Activate the RF generator's output without modulation. The scope should display a DC voltage that varies from approximately 1.2V to 2.0V as the RF generator amplitude is changed from -115dBm to 0dBm. ( Note: At an input amplitude of around -60dBm, this DC voltage will  drop suddenly to about 1.5V and then rise  again  with  increasing  input  amplitude.  This  is normal; the AGC is turning on the LNA gain reduction resistor).
- 6)  Set  the  RF  generator  to  -100dBm. Activate the RF generator's modulation and set the scope's coupling to  AC.  The  scope now displays a lowpass-filtered square wave at TP3 (filtered analog baseband data). Use the RF generator's LF OUTPUT (modulation output) to trigger the oscilloscope.
- 7) Monitor the DATA\_OUT terminal and verify the presence of a 2kHz square wave.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Additional Evaluation

- 1) With the modulation still set to AM, observe the effect  of  reducing  the  RF  generator's  amplitude  on the DATA\_OUT terminal output. The error in this sliced digital signal increases with reduced RF signal  level.  The  sensitivity  is  usually  defined  as  the point at which the error in interpreting the data (by the following embedded circuitry) increases beyond a set limit (BER test).
- 2) With the above settings, a 315MHz-tuned EV kit should display a sensitivity of about -117dBm (0.2% BER) while a 433.92MHz kit displays a sensitivity of about -115dBm (0.2% BER). Note: The above sensitivity  values  are  given  in  terms  of  average  peak power is 3dB higher.
- 3) Capacitors C5 and C6 are used to set the corner frequency of the 2nd-order lowpass Sallen-Key data filter. The current values were selected for bit rates up to  5kbps. Adjusting these values accommodates higher data rates (refer to the MAX1473 data sheet for more details).

## Layout Issues

A properly designed PC board is an essential part of any RF/microwave circuit. On high-frequency inputs and outputs, use controlled-impedance lines and keep them as short as possible to minimize losses and radiation. At high frequencies, trace lengths that are on the order of λ /10 or longer can act as antennas.

Keeping the traces short also reduces parasitic inductance. Generally, 1in of a PC board trace adds about 20nH of parasitic inductance. The parasitic inductance can have a dramatic effect on the effective inductance. For example, a 0.5in trace connecting a 100nH inductor adds an extra 10nH of inductance or 10%.

To reduce the parasitic inductance, use wider traces and a solid ground or power plane below the signal traces. Also, use low-inductance connections to ground on all GND pins, and place decoupling capacitors close to all VDD connections.

The EV kit PC board can serve as a reference design for laying out a board using the MAX1473. All required components have been enclosed in a 1.25in ✕ 1.25in square, which can be directly 'inserted' into the application circuit.

## Detailed Description

## Power-Down Control

The MAX1473 can be controlled externally using the SHDN connector. The IC draws approximately 1.25µA in shutdown mode. Jumper JU1 is used to control this mode. The shunt can be placed between pins 2 and 3

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1473 Evaluation Kit

for continuous shutdown, or pins 1 and 2 for continuous operation. Remove the JU1 shunt for external control. Table 1 describes jumper functions.

## Power Supply

The MAX1473 can operate from 3.3V or 5V supplies. For 5V operation, remove JU7 before connecting the supply to VDD. For 3.3V operation, connect JU7.

## IF Input/Output

The 10.7MHz IF can be monitored with the help of a spectrum analyzer using the MIX\_OUT SMA connector (not provided). Remove the ceramic filter for such a measurement and include R3 (270 Ω ) and C17 (0.01µF) to match the 330 Ω mixer output with the 50 Ω spectrum analyzer. Jumper JU3 needs to connect pins 1 and 2. It is also possible to use the MIX\_OUT SMA connector to inject an external IF as a means of evaluating the baseband data slicing section. Jumper JU3 needs to connect pins 2 and 3.

## F\_IN External Frequency Input

For applications where the correct frequency crystal is not available, it is possible to directly inject an external frequency through the F\_IN SMA connector (not provided). Connect the SMA connector to a function generator.  The  addition  of  C18  and  C19  is  necessary (use 0.01µF capacitors).

## AGC Control

Jumper JU5 controls whether the AGC is enabled. Connect pins 2 and 3 to enable the AGC.

## Crystal Select

Jumper  JU2  controls  the  crystal  divide  ratio. Connecting pins 1 and 2 sets the divide ratio to 64, while connecting pins 2 and 3 sets the ratio to 32. This determines the frequency of the crystal to be used.

## Image Rejection Frequency Select

A unique feature of the MAX1473 is its ability to vary at which frequency the image rejection is optimized. JU6 allows the selection of three possible frequencies: 315MHz, 375MHz, and 433.92MHz. See Table 1 for settings.

## Test Points and I/O Connections

Additional test points and I/O connectors are provided to monitor the various baseband signals and for external connections. See Tables 2 and 3 for a description.

For additional information and a list of application notes, consult the www.maxim-ic.com website.

## MAX1473 Evaluation Kit

## Table 1. Jumper Functions

| JUMPER   | STATE   | FUNCTION                                |
|----------|---------|-----------------------------------------|
| JU1      | 1-2     | Normal operation                        |
| JU1      | 2-3     | Power-down mode                         |
| JU1      | NC      | External power-down control             |
| JU2      | 2-3     | Crystal divide ratio = 32               |
| JU2      | 1-2     | Crystal divide ratio = 64               |
| JU3      | 1-2     | Mixer output to MIX_OUT                 |
| JU3      | 2-3     | External IF input                       |
| JU3      | NC      | Normal operation                        |
| JU4      | 1-2     | Uses PDOUT for faster receiver startup  |
| JU4      | 2-3     | GND connection for peak detector filter |
| JU5      | 1-2     | Disables AGC                            |
| JU5      | 2-3     | Enables AGC                             |
| JU6      | 1-2     | IR centered at 433MHz                   |
| JU6      | 2-3     | IR centered at 315MHz                   |
| JU6      | NC      | IR centered at 375MHz                   |
| JU7      | 1-2     | Connect VDD to +3.3V supply             |
| JU7      | NC      | Connect VDD to +5.0V supply             |

## Table 2. Test Points

|   TP | DESCRIPTION                |
|------|----------------------------|
|    2 | Data slicer negative input |
|    3 | Data filter output         |
|    4 | Peak detector out          |
|    5 | +3.3V                      |
|    6 | GND                        |
|    7 | Data filter feedback node  |
|    8 | Data out                   |
|    9 | Power-down select input    |
|   10 | VDD                        |
|   11 | AGC control                |
|   12 | Crystal select             |

4

## Table 3. I/O Connectors

Figure 1. MAX1473 EV Kit

| SIGNAL   | DESCRIPTION                        |
|----------|------------------------------------|
| RF_IN    | RF input                           |
| F_IN     | External reference frequency input |
| MIX_OUT  | IF input/output                    |
| GND      | Ground                             |
| VDD      | Supply input                       |
| DATA_OUT | Sliced data output                 |
| SHDN     | External power-down control        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1473 Evaluation Kit

<!-- image -->

Figure 2. MAX1473 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1473 Evaluation Kit

<!-- image -->

Figure 3. MAX1473 EV Kit Component Placement GuideComponent Side

Figure 4. MAX1473 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1473 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
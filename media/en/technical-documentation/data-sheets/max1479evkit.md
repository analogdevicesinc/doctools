<!-- lastmod 2022-08-02 -->
## General Description

The MAX1479 evaluation kit (EV kit) allows for a detailed evaluation of the MAX1479 ASK/FSK transmitter. It enables testing of the device's RF performance and requires no additional support circuitry. The RF output uses a 50 Ω matching network and an SMA connector for convenient connection to test equipment. A reverse polarity  SMA is also included to connect to a 1/4 wave whip antenna. The EV kit can also directly interface to the user's embedded design for easy data encoding.

The MAX1479EV kit comes in two versions: a 315MHz version and a 433.92MHz version. The passive components are optimized for these frequencies. These components can easily be changed to work at RF frequencies from 300MHz to 450MHz.

For easy implementation into the customer's design, the MAX1479EV kit also features a proven PC board layout, which can be easily duplicated for quicker time-tomarket. The EV kit Gerber files are available for download at www.maxim-ic.com.

| DESIGNATION       |   QTY | DESCRIPTION                                                           |
|-------------------|-------|-----------------------------------------------------------------------|
| C1, C6 (315MHz)   |     2 | 15pF ±5%, 50V ceramic capacitors (0603) Murata GRM1885C1H150J         |
| C1, C6 (433MHz)   |     2 | 6.8pF ±0.5pF, 50V ceramic capacitors (0603) C0G Murata GRM1885C1H6R8D |
| C2 (315MHz)       |     1 | 22pF ±5%, 50V ceramic capacitor (0603) C0G Murata GRM1885C1H220J      |
| C2 (433MHz)       |     1 | 10pF ±5%, 50V ceramic capacitor (0603) C0G Murata GRM1885C1H100J      |
| C3, C10           |     2 | 0.01µF ±10%, 50V ceramic capacitors (0603) Murata GRM188R71H103KA01   |
| C4                |     1 | 680pF ±5%, 50V ceramic capacitor (0603) C0G Murata GRM1885C1H681J     |
| C5, C16, C18, C19 |     0 | Not installed                                                         |

- ♦ Proven PC Board Layout
- ♦ Proven Components Parts List
- ♦ Multiple Test Points Provided on Board
- ♦ Available in 315MHz or 433.92MHz Optimized Versions
- ♦ Adjustable Frequency Range from 300MHz to 450MHz*
- ♦ Fully Assembled and Tested
- ♦ Can Operate as a Stand-Alone Transmitter with Included Battery

* Requires component changes.

## Ordering Information

| PART             | TEMP RANGE     | IC PACKAGE   |
|------------------|----------------|--------------|
| MAX1479EVKIT-315 | -40°C to +85°C | 16 Thin QFN  |
| MAX1479EVKIT-433 | -40°C to +85°C | 16 Thin QFN  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C7, C9        |     2 | 0.47µF +80/-20%, 16V ceramic capacitors (0603) Y5V Murata GRM188F51C474Z |
| C8, C11, C12  |     3 | 220pF ±5%, 50V ceramic capacitors (0603) Murata GRM1885C1H221J           |
| C13 (315MHz)  |     1 | 2.2pF ±0.5pF, 50V ceramic capacitor (0603) C0G Murata GRM1885C1H2R2D     |
| C13 (433MHz)  |     1 | 1.0pF ±0.5pF, 50V ceramic capacitor (0603) C0G Murata GRM1885C1H1R0D     |
| C14, C15      |     2 | 100pF ±5%, 50V ceramic capacitors (0603) Murata GRM1885C1H101J           |
| JU1-JU10      |    10 | 3-pin headers Digi-Key S1012-36-ND or equivalent                         |
| L1 (315MHz)   |     1 | 27nH ±5% inductor (0603) Coilcraft 0603CS-27NXJB                         |
| L1 (433MHz)   |     1 | 22nH ±5% inductor (0603) Coilcraft 0603CS-22NXJB                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

<!-- image -->

Features

## MAX1479 Evaluation Kit

| DESIGNATION      |   QTY | DESCRIPTION                                                   |
|------------------|-------|---------------------------------------------------------------|
| L2 (315MHz)      |     1 | 22nH ±5% inductor (0603) Coilcraft 0603CS-22NXJB              |
| L2 (433MHz)      |     1 | 18nH ±5% inductor (0603) Coilcraft 0603CS-18NXJB              |
| R1               |     1 | 5k Ω potentiometer BC Components SM4W502                      |
| R2               |     0 | 0 Ω resistor (0603), any, not installed                       |
| R3               |     1 | 5.1 Ω ±5% resistor (0603), any                                |
| R4               |     1 | 0 Ω resistor (0603), any                                      |
| Antenna (315MHz) |     0 | 315MHz 1/4-wave whip antenna, not provided Lynx ANT-315-CW-RH |
| Antenna (433MHz) |     1 | 433MHz 1/4-wave whip antenna, not provided Lynx ANT-433-CW-RH |
| ANTENNA_OUT      |     1 | RP-SMA connector Linx CONREVSMA001                            |
| BAT1             |     1 | Battery holder MPD BA2032                                     |
| Battery          |     1 | Coin-cell battery Panasonic BR2032                            |

## Component Suppliers

| SUPPLIER          | PHONE         | FAX           |
|-------------------|---------------|---------------|
| Coilcraft         | 800-322-2645  | 847-639-1469  |
| Crystek           | 800-237-3061  | 941-561-1025  |
| Hong Kong Crystal | 852-2412-0121 | 852-2498-5908 |
| Murata            | 800-831-9172  | 814-238-0490  |

Note: Indicate you are using the MAX1479 when contacting these manufacturers.

## Quick Start

The following procedure allows for proper device evaluation.

## Required Test Equipment

- Regulated power supply capable of providing +3.0V
- Spectrum analyzer such as the Agilent 8562E
- Optional ammeter for measuring supply current
- Power meter such as the Agilent EPM-441A

2

## Component List (continued)

| DESIGNATION                      |   QTY | DESCRIPTION                                                                  |
|----------------------------------|-------|------------------------------------------------------------------------------|
| REF_IN                           |     1 | SMA connector top mount, not installed Digi-Key J500-ND Johnson 142-0701-201 |
| RF_OUT                           |     1 | SMA connector top mount Digi-Key J500-ND Johnson 142-0701-201                |
| U1                               |     1 | MAX1479ATE                                                                   |
| VDD, VSS, ENABLE, DATA_IN, CKOUT |     5 | Test points Mouser 151-203 or equivalent                                     |
| Y1 (315MHz)                      |     1 | Crystal 9.84375MHz Hong Kong Crystal SSL9843750E03FAFZ800 or Crystek 017000  |
| Y1 (433MHz)                      |     1 | Crystal 13.56MHz Hong Kong Crystal SSM1356000E03FAFZ800 or Crystek 017001    |
| -                                |    10 | Shunt (JU1) Digi-Key S9000-ND or equivalent                                  |
| -                                |     1 | MAX1479 EV kit PC board                                                      |

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's functionality. Do not turn on the DC power until all connections are made:

- 1) Connect a DC supply set to +3.0V, through an ammeter, to the VDD and VSS terminals on the EV kit. Do not turn on the supply.
- 2) Connect the RF\_OUT SMA connector to the spectrum analyzer. Set the analyzer to a center frequency of 315MHz (or 433.92MHz) and a span of 1MHz.
- 3) Turn on the DC supply. The spectrum analyzer should display a peak of about +10dBm at 315MHz (or 433.92MHz).
- 4) Disconnect the spectrum analyzer and connect the power meter instead. Measure the output power and also the current draw.
- 5) Calculate the efficiency. This is done using the following equation:

Efficiency = 10ˆ (POUT/10)/(V x I)

For example, for a +10.8dBm output, and a 10.9mA (at 3.0V) current, the efficiency is 37%.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Layout Issues

A properly designed PC board is an essential part of any RF/microwave circuit. On high-frequency inputs and outputs, use controlled-impedance lines and keep them as short as possible to minimize losses and radiation. At high frequencies, trace lengths that are on the order of λ /10 or longer can act as antennas.

Keeping the traces short also reduces parasitic inductance. Generally, 1in of a PC board trace adds about 20nH of parasitic inductance. The parasitic inductance can have a dramatic effect on the effective inductance. For example, a 0.5in trace connecting a 100nH inductor adds an extra 10nH of inductance or 10%.

To reduce the parasitic inductance, use wider traces and a solid ground or power plane below the signal traces. Also, use low-inductance connections to ground on all GND pins, and place decoupling capacitors close to all VDD connections.

The EV kit PC board can serve as a reference design for laying out a board using the MAX1479.

## Detailed Description

## Power-Down Control

The MAX1479 can be controlled externally using the ENABLE connector. The IC draws approximately 0.2nA (at room temperature) in shutdown mode. Jumper JU1 is used to control this mode. The shunt can be placed between pins 1 and 2 to enable the device. Remove the JU1 shunt for external control. See Table 1 for jumper function descriptions.

## Table 1. JU1 Through JU4 Jumpers Function

| JUMPER   | STATE   | FUNCTION                                                 |
|----------|---------|----------------------------------------------------------|
| JU1      | 1-2     | RF carrier transmit enable                               |
| JU1      | 2-3     | Power-down mode                                          |
| JU1      | N.C.    | External power-down control                              |
| JU2      | 1-2     | RF carrier transmit mode (ASK), FSK high frequency (FSK) |
| JU2      | 2-3     | PA off, PLL ON (ASK), FSK low frequency (FSK)            |
| JU2      | N.C.    | External data transmit                                   |
| JU3      | 1-2     | External supply operation                                |
| JU3      | 2-3     | Battery operation                                        |
| JU4      | 1-2     | FSK mode                                                 |
| JU4      | 2-3     | ASK mode                                                 |

<!-- image -->

## MAX1479 Evaluation Kit

## Data Input

The MAX1479 EV kit transmits ASK and FSK data with data rates of up to 100kbps (ASK) or 20kbps (FSK). JU2 controls whether the MAX1479 transmits the ASK carrier frequency (or the FSK high frequency), turns off the PA (or transmits the FSK low frequency), or transmits an external data stream. See Table 1.

## REF\_IN External Frequency Input

For applications where the correct frequency crystal is not available, it is possible to directly inject an external frequency through the REF\_IN SMA (not provided). Connect the SMA to a low-phase-noise generator. The addition of C18 and C19 is necessary (use 0.01µF capacitors).

## Battery Operation

The MAX1479 EV kit can be powered by an external power supply or by the supplied 3V coin-cell battery. Set jumper JU3 to connect pins 2 and 3 for battery operation.

## RF Output

The MAX1479 EV kit includes two SMA connectors for RF output. RF\_OUT is a standard SMA and is used to connect the PA output to test equipment. Output is matched to 50 Ω .  ANTENNA\_OUT is a reverse polarity SMA and is used to connect to the 1/4-wave whip antenna (not supplied). Note that resistor R2 (0 Ω ) needs to be added.

## Modulation Mode Input

Jumper JU4 sets the mode of transmission. Set jumper JU4 to connect pins 1 and 2 for FSK mode, 2 and 3 for ASK mode.

## FSK Frequency Deviation

The FSK deviation is set by jumpers JU5 through JU7. The maximum deviation depends on the PC board parasitics. The EV kit max is around 50kHz (315MHz). If very large FSK frequency deviations are desired, use a crystal with a larger motional capacitance and/or reduce PC board parasitic capacitances. One way to reduce parasitic  capacitances on the EV kit is to remove C14, C15, and C16 and move the crystal closer to the IC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1479 Evaluation Kit

## Table 2. Clock-Divider Settings

| JUMPER   | SETTING   | JUMPER   | SETTING   | JUMPER   | SETTING   | FUNCTION            |
|----------|-----------|----------|-----------|----------|-----------|---------------------|
| JU5      | 1-2       | JU6      | 1-2       | JU7      | 1-2       | Max deviation       |
| JU5      | 1-2       | JU6      | 1-2       | JU7      | 2-3       | 7/8 x max deviation |
| JU5      | 1-2       | JU6      | 2-3       | JU7      | 1-2       | 3/4 x max deviation |
| JU5      | 1-2       | JU6      | 2-3       | JU7      | 2-3       | 5/8 x max deviation |
| JU5      | 2-3       | JU6      | 1-2       | JU7      | 1-2       | 1/2 x max deviation |
| JU5      | 2-3       | JU6      | 1-2       | JU7      | 2-3       | 3/8 x max deviation |
| JU5      | 2-3       | JU6      | 2-3       | JU7      | 1-2       | 1/4 x max deviation |
| JU5      | 2-3       | JU6      | 2-3       | JU7      | 2-3       | 1/8 x max deviation |

## Clock Output

Jumpers JU8 and JU9 set the divider ratio for the clock output. See Table 3 for the settings.

## Table 3. Clock Divider Settings

| JUMPER   | SETTING   | JUMPER   | SETTING   | FUNCTION       |
|----------|-----------|----------|-----------|----------------|
| JU8      | 1-2       | JU9      | 1-2       | f XTAL /16     |
| JU8      | 1-2       | JU9      | 2-3       | f XTAL /8      |
| JU8      | 2-3       | JU9      | 1-2       | f XTAL /4      |
| JU8      | 2-3       | JU9      | 2-3       | Logic 0 output |

## Envelope Shaping

Jumper JU10 sets envelope shaping for a more gentle turn-on/turn-off of the PA in ASK mode. Set jumper JU10 to connect pins 2 and 3 to allow for envelope shaping. See Table 4 for settings.

## Table 4. JU10 Jumper Function

| JUMPER   | STATE   | FUNCTION            |
|----------|---------|---------------------|
| JU10     | 1-2     | No envelope shaping |
| JU10     | 2-3     | Envelope shaping    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## I/O Connections

Table 5 is a list of all I/O connections.

## Table 5. I/O Connectors

| SIGNAL      | DESCRIPTION                               |
|-------------|-------------------------------------------|
| RF_OUT      | RF output                                 |
| REF_IN      | External reference frequency input        |
| ANTENNA_OUT | Reverse polarity SMA for 1/4-wave antenna |
| VSS         | Ground                                    |
| VDD         | Power-supply input                        |
| DATA_IN     | Data input                                |
| ENABLE      | Power-down control                        |
| CLKOUT      | Buffered clock output                     |

For additional information and a list of application notes, consult the www.maxim-ic.com website.

<!-- image -->

## MAX1479 Evaluation Kit

<!-- image -->

Figure 1. MAX1479 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1479 Evaluation Kit

<!-- image -->

Figure 2. MAX1479 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1479 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1479 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
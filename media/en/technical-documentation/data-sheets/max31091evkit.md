<!-- lastmod 2022-08-03 -->
## MAX3109 Evaluation Kit

## General Description

The MAX31091 evaluation kit (EV kit) is a fully assembled and  tested  PCB  to  evaluate  the  MAX31091  automotive temperature  range  spread-spectrum  EconOscillator™. The EV kit operates from a single 3.3V supply. The EV kit also provides header pins to control the dither percentage (no dither, 1%, 2%, and 4%). An SMA connector for the clock output is included to easily facilitate the connection of test equipment.

## EV Kit Contents

- Assembled circuit board including MAX31091AUA/V+033

## EV Kit Photo

<!-- image -->

EconOscillator is a trademark of Maxim Integrated Products, Inc.

## Features

- Easy Evaluation of the MAX31091
- +3.3V Single-Supply Operation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX3109

<!-- image -->

## Quick Start

## Required Equipment and Accessories

- One DC power supply capable of supplying +3.3V
- One multimeter for measuring the current
- One spectrum analyzer
- One SMA cable
- MAX31091 EV kit

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Note: To configure the SEL0 and SEL1, 3 pin Headers, set the jumper to the right side of the header for '0' position and left side for the '1' position

- 1) Place the EV kit on a nonconductive surface to ensure that nothing on the PCB is shorted to the workspace.
- 2) With the output set to +3.3V and disabled, connect the  positive  terminal  of  the  DC  supply  through  a mutimeter  to  the red  (VCC/+3.3V) and  negative terminal to black  (GND) banana jacks of the MAX31091 EV kit.
- 3) Connect  an  SMA  Cable  to  the  MAX31091  CLOCK OUTPUT  SMA  connector  of  the  MAX31091  EV kit  and  connect  the  other  end  of  the  cable  to  the spectrum analyzer.
- 4) Set the jumper on SEL1 on the position connected to GND (0).
- 5) Set the jumper on SEL0 on the position connected to GND (0).  GND (0) position of the SEL1 and SEL0 set the Device Output to the 'No dither' mode. Table 1 shows the Dither Magnitude (percentage) of MAX31091AUA/V at different positions of the SEL1 and SEL0.
- 6) Set the center frequency of the spectrum analyzer to 33.3MHz, reference level to 30dBm, and span = 10MHz. Table  2  shows  the  OUTPUT  Frequencies  of  the different parts.
- 7) Turn on the power supply. Supply Current should be about  16mA  ±  10%  and  spectrum  analyzer  should display a CW tone signal at 33.3MHz, if MAX31091AUA/ V+033 installed. Table 2 shows the Output frequency of the different parts.
- 8) Set the jumper on SEL0 on the position connected to VCC (1).
- 9) Leave the jumper on SEL1 on the position connected to GND (0). GND (0) position of the SEL1 and VCC (1) position of the SEL0 set the Device Output to the '1% dither' mode and spectrum analyzer displays a spread spectrum  centered  at  33.3MHz  and  about  666KHz bandwidth (± 1.0%), if MAX31091AUA/V+033 installed.
- 10)  By setting the SEL1 and SEL0 at the positions showed on Table 1, you can also see the spread spectrums with ± 2.0% and ± 4.0% dither.

## Evaluates: MAX31091

## Detailed Description

The  MAX31091  is  a  clock  generator  with  selectable dither magnitude and capable of output frequencies from 200kHz to 66.6MHz over the full automotive temperature range (-40°C to  +125°C). The  device  can  also  produce a  spread-spectrum  (dithered)  square-wave  output  using four  pin-selectable  dither  percentages.  The  device  also features two selectable dither rates.

The MAX31091 is shipped from the factory-programmed to a customer-specified frequency.

The MAX31091 can reduce radiated emission peaks. The dither percentage is controlled by the state of the SEL0 and  SEL1  pins.  The  output  frequency  can  be  dithered at  0%,  ±1%,  ±2%,  and  ±4%,  centered  around  the programmed frequency.

## Table 1. Dither Magnitude

|   SEL1 LOGIC LEVEL |   SEL0 LOGIC LEVEL | DITHER MAGNITUDE (%) MAX31091AUA   |
|--------------------|--------------------|------------------------------------|
|                  0 |                  0 | No dither                          |
|                  0 |                  1 | Q1 (1%)                            |
|                  1 |                  0 | Q1 (2%)                            |
|                  1 |                  1 | Q1 (4%)                            |

Note: To configure the SEL0 and SEL1, 3 pin Headers, set the jumper to the right side of the header for '0' position and left side for the '1' position

## Table 2. MAX31091AUA/V ICs and Output Frequencies

| PART               |   OUTPUT FREQUENCY (MHz) |
|--------------------|--------------------------|
| MAX31091AUA/V+033  |                     33.3 |
| MAX31091AUA/V+T033 |                     33.3 |
| MAX31091AUA/V+066  |                     66.6 |
| MAX31091AUA/V+T066 |                     66.6 |
| MAX31091AUA/V+172  |                      1.7 |
| MAX31091AUA/V+T172 |                      1.7 |
| MAX31091AUA/V+200  |                     0.20 |
| MAX31091AUA/V+T200 |                     0.20 |
| MAX31091AUA/V+330  |                     33.0 |
| MAX31091AUA/V+T330 |                     33.0 |

│

## Component Suppliers

| SUPPLIER   | WEBSITE        |
|------------|----------------|
| AVX        | www.avx.com    |
| Murata     | www.murata.com |
| TDK        | www.tdk.com    |
| Del-Tron   | deltron.com    |

Note: Indicate that you are using the MAX31091 when contacting these component suppliers.

## MAX31091 EV Kit Bill of Materials

|   ITEM |   QTY | REFERENCE                  | MANUFACTURER   | PART NUMBER        | DESCRIPTION       | VALUE   | PCB DECAL   | NOTE   |
|--------|-------|----------------------------|----------------|--------------------|-------------------|---------|-------------|--------|
|      1 |     1 | C1                         | AVX            | TAJA476K006RNJ     | Tantalum cap 10%  | 47uF    | 1206        |        |
|      2 |     1 | C6                         | AVX            | TAJR106M006RNJ     | Tantalum cap 10%  | 10uF    | 0805        |        |
|      3 |     3 | C3, C13, C15               | Murata         | GRM21BR71E104KA01L | Ceramic cap 10%   | 100nF   | 0805        |        |
|      4 |     2 | C9-10                      | Murata         | GRM21A5C2E100JW01D | Ceramic cap 5%    | 10pF    | 0805        |        |
|      5 |     4 | C11-12, C14, C16           | Murata         | GRM216R71H102KA01D | Ceramic cap 10%   | 1nF     | 0805        |        |
|      6 |     3 | C2, C4-5                   | Murata         | GCM21BR71E105KA56L | Ceramic cap 10%   | 1uF     | 0805        |        |
|      7 |     2 | C7-8                       | Murata         | GRM2165C1H221JA01D | Ceramic cap 5%    | 220pF   | 0805        |        |
|      8 |     2 | R2-3                       | TDK            |                    | Resistor          | 0Ω      | RES0805     |        |
|      9 |     6 | R1, R4-6, R15, R17         | TDK            |                    | Resistor          | 1kΩ     | RES0805     |        |
|     10 |     1 | JU1                        | Deltron        | 571-0500           | Banana Jack Red   |         |             |        |
|     11 |     1 | JU2                        | Deltron        | 571-0100           | Banana Jack Black |         | JACK        |        |
|     12 |     3 | TP1-TP2, TP5               | DNP            |                    |                   |         |             |        |
|     13 |     3 | TP3, TP6-TP7               | Digikey        | 609-3461-ND        | 3 pin Header      |         | SIP\3P      |        |
|     14 |     1 | J1 (CLOCK OUTPUT) MAX31180 | DNP            |                    |                   |         |             |        |
|     15 |     1 | J2 (CLOCK OUTPUT) MAX31091 | Cinch Conn     | 142-0701-801       | SMA, Edge mount   |         | SMA\EDGE    |        |
|     16 |     1 | U1 (MAX31091)              | Maxim          | MAX31091AUA/V+033  | IC                |         | 8UMAX       |        |
|     17 |     1 | U2 (MAX31180)              | DNP            |                    |                   |         |             |        |
|     18 |     1 | Y1 (FA-238)                | DNP            |                    |                   |         |             |        |

Evaluates: MAX31091

## MAX31091 EV Kit Schematic

<!-- image -->

Evaluates: MAX31091

## MAX31091 EV Kit PCB Layout Diagrams

?

MAX31091 EV Kit-PCB Top Layer

<!-- image -->

│

## MAX31091 EV Kit PCB Layout Diagrams (continued)

MAX31091 EV Kit-PCB Bottom Layer

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX31091EVKIT# | EV KIT |

#Denotes RoHS compliant.

Evaluates: MAX31091

## MAX31091 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are impOied. 0a[im ,nteJrated reserYes tKe riJKt to cKanJe tKe circuitry and specifications ZitKout notice at any time.

│

Evaluates: MAX31091
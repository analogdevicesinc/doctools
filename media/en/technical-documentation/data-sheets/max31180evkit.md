<!-- lastmod 2022-08-03 -->
## MAX31180 Evaluation Kit

## General Description

The MAX31180 evaluation kit (EV kit) is a fully assembled and  tested  PCB  to  evaluate  the  MAX31180  spreadspectrum crystal  multiplier. The  EV  kit  operates  from  a single  3.3V  supply  and  the  onboard  crystal  provides  a 25MHz  clock  signal.  The  EV  kit  also  provides  header pins  to  configure  the  clock  frequency  multiplier,  the magnitude  of  the  spread  spectrum,  and  a  means  to disable the spread spectrum feature. An SMA connector for  the  clock  output  is  included  to  easily  facilitate  the connection of test equipment.

## EV Kit Contents

- Assembled circuit board, including MAX31180AUA+

## MAX31180 EV Kit Board Photo

<!-- image -->

<!-- image -->

## Features

- Easy Evaluation of the MAX31180AUA+
- +3.3V Single-Supply Operation
- Low Peak Cycle to Cycle 75ns Jitter Typical
- Configurable Clock Multiplier
- Selectable Spread Spectrum Magnitude
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX31180

## Quick Start

## Required Equipment and Accessories

- One DC Power Supply capable of supplying +3.3V
- One multimeter for measuring the current
- One spectrum analyzer
- One SMA cable
- MAX31180 EV kit

## Procedure

The EV Kit is fully assembled and tested. Follow the steps below to verify board operation:

Note: To configure the PDN, SMSEL, and CMSEL 3-pin headers, set the jumper to the right side of the header for '0' position and left side for the '1' position.

- 1) Place the EV kit on a nonconductive surface to ensure that nothing on the PCB is shorted to the workspace.
- 2) With the output set to +3.3V and disabled, connect the positive terminal of the DC supply through a Mutimeter to the red (V CC /+3.3V) and negative terminal to black (GND) banana jacks of the MAX31180 EV kit.
- 3) Connect an SMA Cable to the MAX31180 CLOCK OUTPUT SMA Connector of the MAX31180 EV kit and connect the other end of the cable to the spectrum analyzer.
- 4) Set the jumper on PDN on the position connected to GND (0). This position of the PDN set the device to the Power-Down mode.
- 5) Set the jumper on CMSEL on the position connected to GND (0). This position of the CMSEL set the Device Output to the 1 x CLOCK mode (25MHz).
- 6) Set the center frequency of the spectrum analyzer to 25MHz (1 x CLOCK), reference level to 20dBm, and span = 10MHz.
- 7) Turn on the power supply. The supply current should be about 0mA and no signal present on the spectrum analyzer.

## Evaluates: MAX31180

- 8) Remove the jumper from PDN and leave it open. This position of the PDN sets the device to the Power-Up mode and disables the spread spectrum. The spectrum analyzer shows a CW tone signal at 25MHz.
- 9) Set the jumper on PDN on the position connected to V CC  (1). This position of the PDN enables the Spread Spectrum.
- 10)  Set the jumper on SMSEL on the position connected to GND (0). This position of the SMSEL set the device to the ± 0.5% Spread Spectrum mode. The spectrum analyzer shows a spread spectrum centered at 25MHz and about 250KHz bandwidth (± 0.5%).
- 11)  By setting the SMSEL and CMSEL at the positions showed on Table 1, you can also see the spread spectrums at 50MHz (2 x CLOCK) and 100MHz (4 x CLOCK), each with ±1.0% and ± 1.5%.

## Detailed Description

The  MAX31180  is  a  spread-spectrum  clock  generator with low  jitter, selectable  clock  multiplier,  selectable dither  magnitude,  and  capable  of  accepting  a  16MHz to 33.4MHz crystal connected to the X1 and X2 pins. In this EV kit, the mounted 25MHz crystal can be replaced and  alternately,  an  external  16MHz  to  33.4MHz  clock can be applied to X1 in place of the crystal. In this setup, X2 would be left open. Using the CMSEL input, the user selects  whether  the  crystal  or  clock  input  is  multiplied by  1,  2,  or  4.  The  MAX31180  is  capable  of  generating spread-spectrum clocks from 16MHz to 134MHz.

The  PLL  can  dither  the  output  clock  about  its  center frequency  at  a  user-selectable  magnitude.  Using  the SMSEL  input,  the  user  selects  the  dither  magnitude. The PDN input can be used to place the device into  a low-power standby mode where the SSO output is threestated. If the PDN pin is open, the SSO output is active but the  spread-spectrum  dithering  is  disabled.  The  spreadspectrum dither rate is fixed at f IN /992 to keep the dither rate above the audio frequency range. On power-up, the output  clock  (SSO)  remains  three-stated  until  the  PLL reaches a stable frequency (f SSO ) and dither (f DITHER ).

Table 1. PDN, SMSEL, and CMSEL Configuration

| NAME   | FUNCTION                                                                                                                                                                              |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PDN    | Active-Low Power-Down/Spread-Spectrum Disable. Tri-level digital input. 0 = Power-Down/SSO Three-Stated Open = Power-Up/Spread Spectrum Disabled 1 = Power-Up/Spread Spectrum Enabled |
| SMSEL  | Spread-Spectrum Magnitude Select. Tri-level digital input. 0 = ± 0.5% Open = ± 1.0% 1 = ± 1.5%                                                                                        |
| CMSEL  | Clock Multiplier Select. Tri-level digital input. 0 = 1x Open = 2x 1 = 4x                                                                                                             |

Note: Setting the jumper to the right side of the 3-pin header configures the function to '0' position and setting the jumper to the left side configure the function to '1' position.

│

Evaluates: MAX31180

## Component Suppliers

| SUPPLIER   | WEBSITE           |
|------------|-------------------|
| EPSON      | www.eea.epson.com |
| AVX        | www.avx.com       |
| Murata     | www.murata.com    |
| TDK        | www.tdk.com       |
| Del-Tron   | www.deltron.com   |

Note:

Indicate that you are using the MAX31180 when contacting these component suppliers.

## MAX31180 EV Bill of Materials

|   ITEM |   QTY | REFERENCE                  | MANUFACTURER   | PART NUMBER         | DESCRIPTION            | VALUE   | PCB DECAL   |
|--------|-------|----------------------------|----------------|---------------------|------------------------|---------|-------------|
|      1 |     1 | C1                         | AVX            | TAJA476K006RNJ      | Tantalum cap 10%       | 47uF    | 1206        |
|      2 |     1 | C6                         | AVX            | TAJR106M006RNJ      | Tantalum cap 10%       | 10uF    | 0805        |
|      3 |     3 | C3, C13, C15               | Murata         | GRM21BR71E104KA01L  | Ceramic cap 10%        | 100nF   | 0805        |
|      4 |     2 | C9-10                      | Murata         | GRM21A5C2E100JW01D  | Ceramic cap 5%         | 10pF    | 0805        |
|      5 |     4 | C11-12, C14, C16           | Murata         | GRM216R71H102KA01D  | Ceramic cap 10%        | 1nF     | 0805        |
|      6 |     3 | C2, C4-5                   | Murata         | GCM21BR71E105KA56L  | Ceramic cap 10%        | 1uF     | 0805        |
|      7 |     2 | C7-8                       | Murata         | GRM2165C1H221JA01D  | Ceramic cap 5%         | 220pF   | 0805        |
|      8 |     2 | R2-3                       | TDK            |                     | Resistor               | 0Ω      | RES0805     |
|      9 |     6 | R1, R4-6, R15, R17         | TDK            |                     | Resistor               | 1kΩ     | RES0805     |
|     10 |     1 | JU1                        | Deltron        | 571-0500            | Banana Jack Red        |         |             |
|     11 |     1 | JU2                        | Deltron        | 571-0100            | Banana Jack Black      |         | JACK        |
|     12 |     3 | TP1-TP2, TP5               | Digikey        | 609-3461-ND         | 3 pin Header           |         | SIP\3P      |
|     13 |     3 | TP3, TP6-TP7               | DNP            |                     |                        |         |             |
|     14 |     1 | J1 (CLOCK OUTPUT) MAX31180 | Cinch Conn     | 142-0701-801        | SMA, Edge mount        |         | SMA\EDGE    |
|     15 |     1 | J2 (CLOCK OUTPUT) MAX31091 | DNP            |                     |                        |         |             |
|     16 |     1 | U1 (MAX31091)              | DNP            |                     |                        |         |             |
|     17 |     1 | U2 (MAX31180)              | Maxim          | MAX31180AUA+        | IC                     |         | 8UMAX       |
|     18 |     1 | Y1 (FA-238)                | Epson          | FA-238 25.0000MB-K3 | EPSON,25MHz,10pF/50ohm | CRYSTAL | 3.2 x 2.5   |

Evaluates: MAX31180

## MAX31180 EV Kit Schematic

<!-- image -->

## MAX31180 EV Kit PCB Layout Diagrams

MAX31180 EV Kit-PCB Top Layer

<!-- image -->

MAX31180 EV Kit-PCB Bottom Layer

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX31180EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX31180

## MAX31180 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplieG  Ma[iP ,ntegrateG reVerYeV tKe rigKt to cKange tKe circuitr\ anG VpecificationV ZitKout notice at an\ tiPe

│

Evaluates: MAX31180
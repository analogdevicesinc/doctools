<!-- lastmod 2022-08-02 -->
## MAX2750AUA

## General Description

The MAX2750AUA is a self-contained voltage-controlled oscillator  (VCO)  intended  for  use  over  the  2370MHz to  2470MHz  frequency  range.  The  IC  combines  a  fully integrated oscillator and output buffer in a miniature 8-pin μMAX ®  package.

The inductor and varactor elements of the tank are integrated on-chip, greatly simplifying application of the part. The only required external components are a couple of supply  bypass  capacitors.  The  IC  provides  direct  connection  to  the  VCO  tuning  voltage  input  and  the  VCO buffer output. The tuning voltage input range is +0.4V to +2.4V, and the oscillator frequency tuning range is factory adjusted to provide guaranteed limits. The output signal is buffered by an amplifier stage (internally matched to 50Ω) to provide higher output power and isolate the device from load impedance variations.

The MAX2750AUA operates over a +2.7V to +5.5V supply  voltage  range.  Internal  regulation  of  the  oscillator supply voltage eliminates the need for an external LDO regulator  for  the  VCO.  The  IC  also  provides  a  digitally controlled  shutdown  mode  to  permit  implementation  of sophisticated  power-supply  management.  In  shutdown, the supply current is reduced to less than 2μA.

## Applications

- 2.4GHz ISM Band

## Typical Operating Circuit

<!-- image -->

<!-- image -->

## 2.4GHz Monolithic

## Voltage-Controlled Oscillator

## Features

- Guaranteed Frequency Tuning Range: 2370MHz to 2470MHz
- On-Chip Tank Circuit
- Internally Matched Output Buffer Amplifier
- Low-Current Shutdown Mode
- +2.7V to +5.5V Supply Voltage Range
- Miniature 8-Pin μMAX Package
- -40°C to +125°C Temperature Range

## Ordering Information

| PART        | TEMP RANGE      | PIN- PACKAGE   |
|-------------|-----------------|----------------|
| MAX2750AUA+ | -40°C to +125°C | 8 µMAX         |

Pin Configuration appears at end of data sheet.

μMAX is a registered trademark of Maxim Integrated Products, Inc.

## MAX2750AUA

## Absolute Maximum Ratings

| V CC to GND..............................................................-0.3V to +6V   | Operating Temperature Range .........................-40°C to +125°C             |
|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| TUNE, SHDN , BYP, OUT to GND...............-0.3V to (V CC + 0.3V)                       | Junction Temperature......................................................+150°C |
| Continuous Power Dissipation (T A = +70°C)                                              | Storage Temperature Range .............................-65°C to +150°C           |
| 8-Pin μMAX (derate 5.7mW/°C above T A = +70°C)....457mW                                 | Lead Temperature (soldering, 10s) .................................+300°C        |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## DC Electrical Characteristics

(V CC  = +2.7V to +5.5V, V TUNE  = +0.4V to +2.4V, V SHDN ≤ +2V, OUT = connected to 50Ω load, T A  = -40°C to +125°C. Typical values are at V CC  = +3.0V, T A  = +25°C, unless otherwise noted.) (Note 1)

| PARAMETER               | CONDITIONS            |   MIN |   TYP |   MAX | UNITS   |
|-------------------------|-----------------------|-------|-------|-------|---------|
| Supply Voltage          |                       |   2.7 |       |   5.5 | V       |
| Supply Current          | T A = +25 o C         |       |  11.3 |  14.4 | mA      |
| Supply Current          | T A = -40°C to +125°C |       |  16.0 |  21.0 | mA      |
| Shutdown Supply Current |                       |       |     2 |       | µA      |
| SHDN Input Voltage Low  |                       |       |       |   0.6 | V       |
| SHDN Input Voltage High |                       |   2.0 |       |       | V       |
| SHDN Input Current Low  | V SHDN ≤ 0.6V         |    -2 |       |    +2 | µA      |
| SHDN Input Current High | V SHDN ≥ 2.0V         |    -2 |       |    +2 | µA      |
| TUNE Input Current      | 0.4 ≤ V TUNE ≤ 2.4V   |    20 |    20 |    20 | nA      |

## AC Electrical Characteristics

(MAX2750AUA EV kit, V CC  = +2.7V to +5.5V, V TUNE  = +0.4V to +2.4V, V SHDN ≤ +2V, OUT = connected to 50Ω load, T A  = +25°C. Typical values are at V CC  = +3.0V, unless otherwise noted.) (Note 1)

| PARAMETER                              | CONDITIONS                                             |   MIN |   TYP |   MAX | UNITS   |
|----------------------------------------|--------------------------------------------------------|-------|-------|-------|---------|
| Oscillator Guaranteed Frequency Limits | V TUNE = +0.4V to +2.4V, T A = -40°C to +125°C (Note1) |  2370 |       |  2470 | MHz     |
| Phase Noise                            | f OFFSET = 4MHz                                        |       |  -125 |       | dBc/Hz  |
| Phase Noise                            | Noise floor                                            |       |  -151 |       | dBm/Hz  |
| Tuning Gain (Note 2)                   | f OSC = 2370MHz, +3V                                   |       |   140 |       | MHz/V   |
| Tuning Gain (Note 2)                   | f OSC = 2470MHz, +3V                                   |       |    90 |       | MHz/V   |
| Output Power                           |                                                        |       |    -3 |       | dBm     |
| Return Loss                            |                                                        |       |    12 |       | dB      |
| Harmonics                              |                                                        |       |   -30 |       | dBc     |
| Load Pulling                           | VSWR = 2:1, all phases                                 |       |     4 |       | MHz P-P |
| Supply Pushing                         | V CC stepped: +3.3V to +2.8V                           |       |   1.3 |       | MHz/V   |
| Oscillator Turn-On Time                | Exiting shutdown (Note 3)                              |       |     8 |       | µs      |
| Oscillator Turn-Off Time               | Entering shutdown (Note 4)                             |       |     5 |       | µs      |

Note 1: Minimum and maximum limits are guaranteed by production test at T A  = +25°C and T A  = +125°C. Minimum and maximum limits are guaranteed by design and characterization at T A  = -40°C.

Note 2: Tuning gain is measured at the oscillator's guaranteed frequency limits.

Note 3: Turn-on time to within 3dB of final output power

Note 4: Turn-off time to output power of -10dBm.

## 2.4GHz Monolithic Voltage-Controlled Oscillator

│

## MAX2750AUA

## Typical Operating Characteristics

(Circuit of Figure 1, V CC  = +3.0V, V TUNE  = +0.4V to +2.4V, V SHDN ≤ 2V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

NORMALIZED HARMONIC OUTPUT SPECTRUM

<!-- image -->

<!-- image -->

## 2.4GHz Monolithic Voltage-Controlled Oscillator

│

## MAX2750AUA

## Pin Description

Figure 1. Typical Application Circuit

|   PIN | NAME   | FUNCTION                                                                                                                                                                             |
|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | BYP    | VCO Bypass. Bypass with a 0.1µF capacitor to GND.                                                                                                                                    |
|     2 | TUNE   | Oscillator Frequency Tuning Voltage Input. High-impedance input with a voltage input range of +0.4V (low frequency) to +2.4V (high frequency).                                       |
|     3 | GND    | Ground Connection for Oscillator and Biasing. Requires a low-inductance connection to the circuit board ground plane.                                                                |
|     4 | SHDN   | Shutdown Logic Input. A high-impedance input logic-level low disables the device and reduces supply current to less than 1.0µA. A logic-level high enables the device.               |
|     5 | V CC1  | Bias and Oscillator DC Supply Voltage Connection. Bypass separately from pin 6 with a 220pF capacitor to GND for low noise and low spurious content performance from the oscillator. |
|     6 | V CC2  | Output Buffer DC Supply Voltage Connection. Bypass separately from pin 5 with a 220pF capacitor to GND for best high frequency performance.                                          |
|     7 | OUT    | Buffered Oscillator Output. Incorporates an internal DC-blocking capacitor. OUT is internally matched to 50Ω.                                                                        |
|     8 | GND    | Ground Connection for Output Buffer. Requires a low-inductance connection to the circuit board ground plane.                                                                         |

<!-- image -->

## 2.4GHz Monolithic

## Voltage-Controlled Oscillator

│

## MAX2750AUA

## Detailed Description

## Oscillator

The MAX2750AUA VCO is implemented as an LC oscillator topology, integrating all of the tank components onchip. This fully monolithic approach provides an extremely easy-to-use VCO, equivalent to a VCO module. The frequency is controlled by a voltage applied to the TUNE pin, which  is  internally  connected  to  the  varactor.  The  VCO core uses a differential topology to provide a stable frequency versus supply voltage and improve the immunity to  load variations. In addition, there is a buffer amplifier following  the  oscillator  core  to  provide  added  isolation from load variations and to boost the output power.

## Output Buffer

The oscillator signal from the core drives an output buffer  amplifier.  The  amplifier  is  internally  matched  to  50Ω including an on-chip DC-blocking capacitor. No external DC-blocking  capacitor  is  required,  eliminating  the  need for any external components. The output amplifier has its own VCC and GND pins to minimize load-pulling effects. The amplifier boosts the oscillator signal to a level suitable for driving most RF mixers.

## Applications Information

## Tune Input

The tuning input is typically connected to the output of the PLL loop filter.  The  loop  filter  provides  an  appropriately low-impedance  source.  The  input  may  incorporate  an extra RC filter stage to reduce high-frequency noise and spurious signals. Any excess noise on the tuning input is directly translated into FM noise, which can degrade the phase-noise  performance  of  the  oscillator.  Therefore,  it is important to minimize the noise introduced on the tuning input. A simple RC filter with low corner frequency is needed during  testing  to  filter  the  noise  present  on  the voltage source driving the tuning line.

## 2.4GHz Monolithic Voltage-Controlled Oscillator

## Layout Issues

Always use controlled impedance lines (microstrip, coplanar  waveguide,  etc.)  for  high-frequency  signals. Always place decoupling capacitors as close as possible to the VCC pins; for long V CC  lines, it may be necessary to add additional decoupling capacitors located further from the device. Always provide a low-inductance path to ground, and keep GND vias as close as possible to the device. Thermal reliefs on GND pads are not recommended.

## Pin Configuration

<!-- image -->

│

## MAX2750AUA

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   | LAND PATTERN NO.   |
|----------------|----------------|----------------|--------------------|
| 8 µSOP         | U8+1           | 21-0036        | 90-0092            |

## 2.4GHz Monolithic Voltage-Controlled Oscillator

## MAX2750AUA

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                  | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------|-----------------|
|                 0 | 6/07            | Initial release                              | -               |
|                 1 | 4/15            | Removed automotive reference from data sheet | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations Zithout notice at any time. The parametric values (min and ma[ limits) shoZn in the (lectrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

## 2.4GHz Monolithic Voltage-Controlled Oscillator
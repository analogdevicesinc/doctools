<!-- lastmod 2022-08-02 -->
## General Description

The MAX9721 evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9721, a DirectDrive stereo headphone amplifier with -2V/V fixed gain for single 1.0V applications. The EV kit can be used to evaluate the MAX9721B (-1.5V/V fixed gain) and MAX9721C (-1V/V fixed gain).

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1, C2, C3    |     3 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K   |
| C4            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475K |
| C5, C6        |     2 | 0.47µF ±20%, 10V tantalum capacitors (0402) AVX TACK474M010      |
| JU1           |     1 | 3-pin header                                                     |
| OUT           |     1 | 3.5mm SMT stereo headphone jack                                  |
| OUTL, OUTR    |     2 | Not installed, test points                                       |
| U1            |     1 | MAX9721AETC (4mm x 4mm 12-pin TQFN)                              |
| U2            |     0 | Not installed, MAX9721AEBC-T (4 x 3 UCSP  )                     |
| None          |     1 | Shunt                                                            |
| None          |     1 | MAX9721 PC board                                                 |

UCSP is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Features

- ♦ Single Power Supply: 0.9V to 1.8V
- ♦ 20mW per Channel into 32 Ω
- ♦ 25mW per Channel into 16 Ω
- ♦ Low 0.006% THD+N
- ♦ 1µA (typ) IC Shutdown Current
- ♦ Fixed -2V/V Gain (MAX9721A)
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE          |
|--------------|------------------|---------------------|
| MAX9721EVKIT | 0 ° C to +70 ° C | 12 TQFN (4mm x 4mm) |

Note: To evaluate the MAX9721B/C, request a MAX9721BETC/ MAX9721CETC free sample with a MAX9721 EV kit.

## Quick Start

The MAX9721 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 1.5V, 150mA power supply
- Stereo headphone with 3.5mm plug
- Audio source (i.e., CD player, cassette player)
- 1) Verify  that  JU1  has  a  shunt  across  pins  1  and  2 ( SHDN = VDD).
- 2) Plug the stereo headphone into the OUT jack.
- 3) Connect the 1.5V power supply to the VDD pad and the power-supply ground to the GND pad.
- 4) Connect the audio source to VINL and VINR pads.
- 5) Turn on the power supply, and then turn on the audio source.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| AVX        | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Please indicate that you are using the MAX9721 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9721 Evaluation Kit

## Detailed Description

The MAX9721 EV kit evaluates a class AB DirectDrive stereo headphone amplifier with a -2V/V fixed gain. The EV kit delivers up to 20mW per channel into a 32 Ω load and achieves 0.006% THD+N.

## Table 1. JU1 Function

Figure 1. MAX9721 EV Kit Schematic

| SHUNT LOCATION   | SHDN PIN         | EV KIT OUTPUT   |
|------------------|------------------|-----------------|
| Pins 1 and 2     | Connected to VDD | Enabled         |
| Pins 2 and 3     | Connected to GND | Disabled        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper Selection

Jumper JU1 controls the SHDN pin of the MAX9721 IC. See Table 1 for JU1 function.

## Evaluating MAX9721B/C

To evaluate the MAX9721B/C with the MAX9721 EV kit, replace the MAX9721AETC with a MAX9721BETC or MAX9721CETC.

<!-- image -->

Figure 2. MAX9721 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9721 Evaluation Kit

Figure 3. MAX9721 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX9721 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3
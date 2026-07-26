<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX9728A evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX9728A DirectDrive™ stereo headphone amplifier.  Maxim's DirectDrive technology eliminates the need for DC-blocking capacitors on the stereo outputs of the amplifier. Designed to operate from a 2.7V to 5.5V DC power supply, the EV kit is capable of delivering up to 42mW per channel into a 16 Ω load or 63mW per channel into a 32 Ω load at 1% THD+N (VDD = 5V).

The EV kit can be configured as a line driver to deliver 2VRMS into a 10k Ω load from a single 3.3V DC supply. The MAX9728A EV kit also evaluates the MAX9728B IC.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 1.0µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K Taiyo Yuden LMK107BJ105KA |
| C4*           |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212BJ106MG  |
| E1, E7        |     2 | 15k Ω ±1% resistors (0603)                                                                 |
| E2, E8        |     2 | 30.1k Ω ±1% resistors (0603)                                                               |
| E3, E9        |     2 | 0.47µF ±10%, 6.3V X7R ceramic capacitors (0603) TDK C1608X5R0J474K                         |

## Features

- ♦ No Bulky DC-Blocking Capacitors Required
- ♦ 2.7V to 5.5V DC Single-Supply Operation
- ♦ 63mW Per Channel into 32 Ω (VDD = 5V)
- ♦ Low 0.02% THD+N at 1kHz
- ♦ High 86dB PSRR Eliminates LDO
- ♦ 2VRMS Audio Line Driver from a Single 3.3V Supply
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX9728AEVKIT | 0°C to +70°C | 12 Thin QFN  |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                   |
|------------------|-------|-----------------------------------------------|
| E4, E10          |     2 | 0 Ω resistors (0603)                          |
| E5, E6, E11, E12 |     0 | Not installed (0603)                          |
| J1               |     1 | Stereo headphone jack (3.5mm dia.)            |
| JU1              |     1 | 3-pin header                                  |
| U1               |     1 | MAX9728AETC+ (12-pin TQFN, 3mm x 3mm x 0.8mm) |
| -                |     1 | Shunt                                         |
| -                |     1 | MAX9728A EV kit PC board                      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9728A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9728A Evaluation Kit

## Quick Start

## Recommended Equipment

- One pair of 16 Ω or 32 Ω headphones
- One DC power supply capable of supplying between 2.7V and 5.5V at 500mA
- One stereo audio source

The MAX9728A EV kit can be used to evaluate the MAX9728B, fixed-gain, DirectDrive stereo headphone amplifier. To evaluate the MAX9728B, request a MAX9728BETC free sample with the MAX9728AEVKIT (see the Evaluating the MAX9728B section for more details).

## Shutdown Control

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9728A IC. See Table 1 for jumper shunt positions.

## Table 1. Jumper JU1 Shutdown Selection

| SHUNT POSITION   | DESCRIPTION        |
|------------------|--------------------|
| 1-2              | Amplifier enabled  |
| 2-3              | Amplifier disabled |

## Layout Considerations

To optimize the audio performance of the MAX9728A, it is  important to follow these layout guidelines. The MAX9728A EV kit implements two ground planes to minimize the amount of charge-pump switching noise coupled into the audio signal. The two planes are starconnected at one point (GND pad). Place capacitors C1, C2, and C3 as close to the IC as possible. Use short, wide traces to connect the power pins of the IC to the power supply.

## Evaluating the MAX9728B

The MAX9728A EV kit can evaluate the MAX9728B. The MAX9728B is a -1.5V/V fixed-gain version of the MAX9728A. To evaluate the MAX9728B, replace U1 with a MAX9728BETC+ IC and replace the components as outlined in Table 2. The MAX9728B IC can only be evaluated in the headphone amplifier configuration.

## Table 2. Component Values for Evaluating the MAX9728B

| COMPONENT   | MAX9728A          | MAX9728B      |
|-------------|-------------------|---------------|
| E1, E7      | 15k Ω resistors   | 0 Ω resistors |
| E2, E8      | 30.1k Ω resistors | Open          |

## Procedures

The MAX9728A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1.
- 2) Plug the headphones into the 3.5mm headphone jack.
- 3) Ensure that the stereo audio source is turned off.
- 4) Connect the disabled audio source between IN\_ and GND.
- 5) Connect the 2.7V to 5.5V DC power supply to the VDD and GND pads.
- 6) Turn on the DC power supply.
- 7) Enable the stereo audio source.

## Detailed Description

The  MAX9728A EV kit evaluates  the  MAX9728A adjustable gain, DirectDrive stereo headphone amplifier. The MAX9728A EV kit is configured with an external gain of  -2V/V and can be powered from a 2.7V to 5.5V DC single supply. The MAX9728A is designed to drive 42mW per channel into a 16 Ω load or 63mW per channel into a 32 Ω load at 1% THD+N (VDD = 5V).

The EV kit can also be configured as an audio line driver to drive 2VRMS into a 10k Ω load from a single supply. An active lowpass filter can be implemented with the MAX9728A (see the MAX9728A as a Lineout Amplifier section). All passive components recommended for a line driver configuration are included in the MAX9728A EV kit pack-out BOM.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9728A Evaluation Kit

## MAX9728A as a Line Out Amplifier (Optional Configuration)

2VRMS is a popular audio line level, first used in CD players, but now common in DVD and set-top box (STB) interface standards. An audio system designer cannot simply run the line out stage from a typical 5V supply; the resulting output swing would be inadequate for a 2VRMS, or 5.7VP-P, output swing. A common solution to this problem is to use operational amplifiers driven from split supplies (±5V typically), or to use a highvoltage supply rail (9V to 12V). This output level requirement can add extra cost and complexity to the system power supply. Maxim's DirectDrive architecture grants the ability to derive 2VRMS from a single +5V supply, or even a single +3.3V supply, at reduced system cost and component count.

When the MAX9728A is used as a line driver to provide outputs that feed stereo equipment with a digital-toanalog converter (DAC) audio input source, it is often desirable to eliminate any high-frequency quantization noise produced by the DAC output before it reaches the load. This high-frequency noise can cause the input stages of the line-in equipment to exceed slew-rate limitations or create excessive EMI emissions on the cables between devices.

The MAX9728A EV kit can be configured as a line driver  with  an  active  lowpass  filter  to  suppress  the  highfrequency quantization noise produced by the DAC output. Figure 1 demonstrates the MAX9728A configured as a 2-pole Rauch/multiple-feedback filter with a passband gain of 6dB and a -3dB (below passband) cutoff frequency of approximately 27kHz (see Figure 2 for the Gain vs. Frequency plot).

<!-- image -->

Figure 1. MAX9728A Line Out Amplifier and Filter Block Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9728A Evaluation Kit

To evaluate the MAX9728A EV kit in a line driver, active lowpass filter  configuration,  replace  the  passive  components as outlined in Table 3. An active lowpass filter pack-out BOM is shipped with the MAX9728A EV kit. See Figure 3 for headphone amplifier configuration. See Figure 4 for line driver configuration.

Figure 2. Gain vs. Frequency for the Line Out Amplifier (VDD = 5V, AV = -2V/V, f = 1kHz to 100kHz, RL = 32 Ω )

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 3. MAX9728A EV Kit Active Lowpass Filter Configuration

| DESIGNATION   | COMPONENT VALUE FOR HEADPHONE AMPLIFIER CONFIGURATION   | COMPONENT VALUE FOR LINE DRIVER CONFIGURATION   |
|---------------|---------------------------------------------------------|-------------------------------------------------|
| E1, E7        | 15k Ω resistors                                         | 7.5k Ω resistors                                |
| E2, E8        | 30.1k Ω resistors                                       | 220pF capacitors                                |
| E3, E9        | 0.47µF capacitors                                       | 7.5k Ω resistors                                |
| E4, E10       | 0 Ω resistors                                           | 1µF capacitors                                  |
| E6, E12       | Open                                                    | 1200pF capacitors                               |
| E5, E11       | Open                                                    | 15k Ω resistors                                 |

<!-- image -->

## MAX9728A Evaluation Kit

<!-- image -->

Figure 3. MAX9728A EV Kit Schematic (Headphone Amplifier Shipped Configuration)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9728A Evaluation Kit

Figure 4. MAX9728A EV Kit Schematic (Optional Line Driver Configuration)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9728A Evaluation Kit

Figure 5. MAX9728A EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 6. MAX9728A EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9728A Evaluation Kit

Figure 7. MAX9728A EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 8. MAX9728A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

M Quijano
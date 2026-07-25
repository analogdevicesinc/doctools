<!-- lastmod 2022-08-03 -->
## General Description

The MAX8678 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) for evaluating the MAX8678 white LED charge pump with mono class AB audio amplifier. The MAX8678 EV kit drives up to four LEDs for backlighting. In addition, the EV kit is able to drive a combined loudspeaker/earpiece speaker for the mono audio amplifier. An on-board pulse generator provides an easy way to evaluate the MAX8678's amplifier gain adjustment and LED dimming.

| DESIGNATION              |   QTY | DESCRIPTION                                                                            |
|--------------------------|-------|----------------------------------------------------------------------------------------|
| C1, C2, C4, C5, C12, C13 |     6 | 1µF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105K TDK C1005X5R0J105K  |
| C3, C7, C8               |     3 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K                       |
| C6                       |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K TDK C1608X5R0J475K |
| C9, C11                  |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H100D                         |
| D1-D4                    |     4 | White LEDs Nichia NSCW215T                                                             |
| D5, D6                   |     2 | Green LEDs (0603) Panasonic LNJ308G8TRA                                                |
| J1                       |     0 | Not installed, 10-pin (2 x 5) header, 0.1in spacing                                    |
| JU1, JU7                 |     2 | 3-pin headers                                                                          |
| JU2-JU5                  |     4 | 2-pin headers                                                                          |
| JU6                      |     0 | Not installed, PCB short                                                               |

<!-- image -->

## Features

- ♦ High-Efficiency White LED Charge Pump Individual Adaptive Supply for Each LED 24mA to 0.1mA Dimming Range Low 50µA (typ) Quiescent Current
- ♦ Mono Class AB Loudspeaker Amplifier 1.1W RMS Mono Output (8 Ω , VIN = 5V) Low 0.004% THD+N at 1kHz High 90dB PSRR at 1kHz Fully Differential Inputs -9dB to +18dB Gain Settings in 3dB Steps Low Quiescent Current
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ Thermal Shutdown, Open- and Short-Circuit Protections
- ♦ Fully Assembled and Tested
- ♦ 16-Pin, 3mm x 3mm Thin QFN IC Package

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8678EVKIT+ | EV Kit |

+Denotes lead-free and RoHS-compliant.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                              |
|---------------|-------|----------------------------------------------------------------------------------------------------------|
| R1, R2        |     2 | 470k Ω ±5% resistors (0402)                                                                              |
| R3, R4        |     2 | 220 Ω ±5% resistors (0402)                                                                               |
| R5            |     1 | 10k Ω ±5% resistor (0402)                                                                                |
| S1-S5         |     5 | Momentary pushbutton switches Panasonic EVQ-PHP03T                                                       |
| U1            |     1 | White LED charge pump with mono Class AB audio amplifier (16 thin QFN) Maxim MAX8678ETE+ (Top Mark: AFF) |
| U2            |     1 | Maxim low-power LCD microcontroller (68 QFN) MAXQ2000-RAX+                                               |
| U3            |     1 | Maxim ultra-low-noise LDO linear regulator (5 SC70) MAX8511EXK25+ (Top Mark: ADV)                        |
| Y1            |     1 | 16MHz crystal Citizen HC49US16.000MABJ-U ECS ECS-160-20-4X Vishay XT9S20ANA16M                           |
| Y2            |     0 | Not installed, 32.768kHz crystal (1206)                                                                  |
| -             |     6 | Shunts, 2 position                                                                                       |
| -             |     1 | PCB: MAX8678 Evaluation Kit+                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

µ

## MAX8678 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Kamaya, Inc.                           | 260-489-1533 | www.kamaya.com              |
| Murata Electronics North America, Inc. | 814-237-1431 | www.murata-northamerica.com |
| Nichia Corp.                           | 248-352-6575 | www.nichia.com              |
| Panasonic Corp.                        | 800-405-0652 | www.panasonic.com           |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX8678 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 2.7V to 5.5V power supply or battery able to deliver 1.5A
- Audio source (e.g., CD player, MP3 player, etc.)
- 4 Ω /8 Ω speaker

## Procedure

The MAX8678 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Preset the power supply to between 2.7V and 5.5V.
- 2) Turn off the power supply. Do not turn on the power supply until all connections are completed.

## Table 1. Jumper Positions

| JUMPER   | POSITIONS                                               | POSITIONS                                         | POSITIONS                                 |
|----------|---------------------------------------------------------|---------------------------------------------------|-------------------------------------------|
| JUMPER   | OPEN                                                    | 1-2                                               | 2-3                                       |
| JU1      | -                                                       | Differential audio input                          | Single-ended audio input                  |
| JU2      | IN- input filter capacitor is used                      | IN- input filter capacitor is not used            | -                                         |
| JU3      | IN+ input filter capacitor is used                      | IN+ input filter capacitor is not used            | -                                         |
| JU4      | An external pulse generator controls the dimming        | The on-board pulse generator controls the dimming | -                                         |
| JU5      | An external pulse generator controls the amplifier gain | The on-board pulse generator controls the gain    | -                                         |
| JU6      | JU6 connects the input supply to the LEDs               | JU6 connects the input supply to the LEDs         | JU6 connects the input supply to the LEDs |
| JU7      | The pulse generator is not powered                      | The pulse generator is powered from IN1           | The pulse generator is powered from IN2   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 3) Turn off the audio source.
- 4) Verify  that  shunts  on  JU2-JU5 are installed (if  the audio source does not have a bias voltage compatible with the MAX8678, remove the shunts from JU2 and JU3 to use the input filter capacitors). See Table 1 for jumper positions.
- 5) Connect the speaker across OUT+ and OUT- output pads on MAX8678 EV kit.
- 6) Connect the audio source to IN+/IN- for differential audio source and to IN+ for single-ended audio input source.
- 7) Set JU1 to select a differential or single-ended input (JU2 and JU3 must be removed when using a single-ended input).
- 8) Set JU7 to IN1.
- 9) Connect the power-supply positive terminal to the IN1 pad.
- 10) Connect the power-supply negative terminal to the GND1 pad.
- 11) Turn on the power supply and the audio source.
- 12) Press switch S2 once.
- 13) Verify that the white LEDs are dimly lit.
- 14) Repeatedly press switch S2 to increase the LED brightness.
- 15) Press switch S1 to run the LED demo.
- 16) Press switch S4 to turn on the audio amp to the minimum volume.
- 17) Repeatedly press switch S4 to increase the volume in 3dB steps.

## Detailed Description

## On-Board Pulse Generator

The on-board pulse generator provides an easy way to evaluate the LED dimming and amplifier gain adjustment. The pulse generator outputs the serial-pulse signals for  ENLED and ENAMP. LED D6 indicates when the LED driver is active and LED D5 indicates when the audio amplifier is active. Five pushbutton switches (S1-S5) are used to set the LED brightness and amplifier gain, as shown in Table 2.

The pulse generator is powered from either IN1 or IN2. To power from IN1, connect pins 1-2 of JU7. This powers the EV kit from the same supply as the MAX8678, allowing the EV kit to operate from a single supply. To power the pulse generator from a separate supply, connect pins 2-3 of JU7 and connect the supply from IN2 to GND2. This is useful when evaluating the quiescent current of the MAX8678.

## Using External Pulse Generators

To use external pulse generators to control ENLED and ENAMP, disconnect ENLED and ENAMP from the onboard pulse generator by removing the shunts from JU4 and JU5. Remove the shunt from JU7 to disconnect power from the on-board pulse generator. The signals from the external pulse generators are connected to  the  pads  labeled  ENLED and ENAMP. For information  on  the  required  serial-pulse  signal,  refer  to  the MAX8678 IC data sheet.

## LED Driver

Using the on-board pulse generator, press S2 to increase LED brightness or press S3 to decrease brightness. There are 31 brightness settings and an off setting. Refer to the MAX8678 IC data sheet for details. Pressing S1 starts the LED demo, which cycles through a preset sequence of dimming and flashing. Press S2 or S3 to

## Table 2. Pulse-Generator Controls

| PUSHBUTTON   | FUNCTION                                                                                                                                                                                                                 |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| S1           | Used to activate the LED demo. The MAX8678 EV kit changes the brightness of LED1-LED4 in a predefined sequence. Press S2 or S3 to stop the demo.                                                                         |
| S2           | Used to increase the brightness of LED1-LED4. When maximum brightness is reached, an additional press of S2 forces the MAX8678 to enter power-down mode for the LEDs.                                                    |
| S3           | Used to decrease the brightness of LED1-LED4. When minimum brightness is reached, an additional press of S3 turns off the MAX8678 LEDs. Pressing S3 when the LEDs are off turns the LEDs on at full brightness.          |
| S4           | Used to increase gain of the audio amplifier. When maximum gain is reached, an additional press of S4 turns off the audio amplifier. Pressing S4 when the audio amplifier is off turns the amplifier on at minimum gain. |
| S5           | Used to decrease gain of the audio amplifier. When minimum gain is reached, an additional press of S3 turns off the audio amplifier. Pressing S5 when the audio amplifier is off turns the amplifier on at maximum gain. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8678 Evaluation Kit

cancel the demo. The power-up default setting is off. Note that the LEDs might flash briefly when power is first applied, due to the pulse-generator circuit powering up.

## Evaluating with Fewer than Four LEDs

To use fewer than four LEDs, connect the square pad next to any unused LEDs to the IN1 pad.

## Using External LEDs

To connect external LEDs to the MAX8678 EV kit, cut the trace shorting JU6. Connect the anodes of all the external LEDs to the IN1 pad. Connect each cathode to one of the LED outputs (square pads next to D1-D4). If fewer than four LEDs are used, connect any unused LED output to IN1.

## Audio Amplifier

Using the on-board pulse generator, press S4 to increase the amplifier gain or S5 to reduce the gain. The gain up/down buttons cycle through off and -9dB to +18dB in 3dB steps. The power-up default setting is off.

## Input Filter Capacitors

The EV kit has 1µF input filter capacitors installed. To evaluate without the filter capacitors, short the pins of JU2 and JU3. If the input bias voltage is out of the MAX8678's common-mode input-voltage range, these jumpers must be open.

## Differential or Single-Ended Input

JU1 selects between differential or single-ended inputs. For a differential input, connect the input to the IN+ and IN- pads. For a single-ended input, connect the input to IN+ with the signal ground connected to GND1. When using a single-ended input, the input filter capacitors must be used (JU2 and JU3 are open).

## Speaker Output

The MAX8678 EV kit is capable of driving a speaker with 4 Ω or  greater  impedance. Connect the speaker across the OUT+ and OUT- pads.

## MAX8678 Evaluation Kit

Figure 1. MAX8678 EV Kit Schematic (MAX8678)

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8678 Evaluation Kit

Figure 2. MAX8678 EV Kit Schematic (Pulse Generator)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8678 Evaluation Kit

Figure 3. MAX8678 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8678 Evaluation Kit

<!-- image -->

Figure 4. MAX8678 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8678 Evaluation Kit

Figure 5. MAX8678 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
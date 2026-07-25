<!-- lastmod 2022-08-03 -->
## General Description

The MAX9814 evaluation kit (EV kit) is a fully assembled and tested PCB that is used to evaluate the singlesupply MAX9814 low-noise microphone amplifier IC. The MAX9814 IC contains a low-noise amplifier, an output amplifier, a microphone bias-voltage generator, and automatic gain-control (AGC) internal circuitry. The overall gain of the microphone amplifier is selectable to 40dB, 50dB, or 60dB without compression. The MAX9814 incorporates compressor/limiter circuitry that limits the microphone output to a set voltage.

The MAX9814 EV kit operates over a 2.7V to 5.5V range. The EV kit also features low quiescent current, and shutdown control to minimize power consumption. The MAX9814 IC is available in a 14-pin TDFN (3mm x 3mm x 0.8mm) exposed paddle package.

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1            |     1 | 0.22µF ±10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J224K |
| C2, C7, C9    |     3 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K  |
| C3            |     1 | 0.047µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E223K |
| C4            |     1 | 0.022µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E223K |
| C5            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K  |
| C6            |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R1A105KB   |
| C8            |     1 | 0.47µF ±10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J474K |

<!-- image -->

Features

- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ 20dB of Dynamic Gain Compression
- ♦ Selectable Gain Control
- ♦ Programmable Attack Time
- ♦ Selectable Attack/Release Ratio
- ♦ Low-Power Shutdown Mode
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX9814EVKIT+ | 0°C to +70°C* | 14 TDFN-EP** |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                          |
|---------------|-------|--------------------------------------|
| J1            |     1 | Nonswitched PC-mount RCA jack, black |
| J2            |     1 | Nonswitched PC-mount RCA jack, red   |
| JU1, JU2, JU3 |     3 | 3-pin headers                        |
| JU4, JU5, JU6 |     3 | 2-pin headers                        |
| R1            |     1 | 150k Ω ±1% resistor (0402)           |
| R2            |     1 | 100k Ω ±1% resistor (0402)           |
| R3            |     1 | 2.21k Ω ±1% resistor (0402)          |
| U1            |     1 | MAX9814ETD+ (14-pin TDFN)            |
| -             |     6 | Shunts (JU1-JU6)                     |
| -             |     1 | PCB: MAX9814 Evaluation Kit          |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK Corp.  | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9814 when contacting this component supplier.

1

## MAX9814 Evaluation Kit

## Quick Start

## Recommended Equipment

- 5V 200mA power supply
- Function generator
- Digital multimeter (DMM)
- Oscilloscope

## Procedure

The MAX9814 EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Caution: Do not turn on the power supply until all connections are completed:

- 1) Verify  that  shunts  are  installed  across  pins  1-2  of jumpers JU1 (MAX9814 enabled), JU2 (gain = 40dB), and JU3 (attack/release ratio = 1:2000).
- 2) Verify  that  a  shunt  is  not  installed  across  jumpers JU4, JU5, JU6 (attack time ≈ 53µs).
- 3) Set the power supply to 5V.
- 4) Set the function generator's output for a sine wave with 10mVP-P, 1kHz frequency, and 0V offset.
- 5) Turn off the power supply and function generator.
- 6) Connect channel 1 of the oscilloscope to the MIC\_IN pad and channel 2 of the oscilloscope to the MIC\_OUT pad. Connect the ground leads of the oscilloscope to the respective SGND\_ pads.
- 7) Connect the 5V terminal of the power supply to the VCC pad and the ground terminal of the power supply to the GND pad.
- 8) Connect the positive output of the function generator to the MIC\_IN pad on the EV kit and the ground lead of the function generator to the SGND\_IN pad.
- 9) Connect the positive terminal of the digital multimeter  to  the  TH  pad  and  the  ground  terminal  to  the GND pad.
- 10) Turn on the power supply.
- 11) Verify that the TH voltage is approximately 800mV.
- 12) Turn on the function generator.
- 13) Using the oscilloscope, verify that the signal at the MIC\_OUT pad is 1VP-P.
- 14) Increase the function generator to 50mVP-P.
- 15) Verify that MIC\_OUT amplitude is 1.6VP-P.

## Detailed Description

The MAX9814 EV kit is used to evaluate the MAX9814 low-noise microphone amplifier IC, which is designed for  single-supply applications. The power supply must provide a minimum 200mA to the MAX9814 EV kit, which has an operating range of 2.7V to 5.5V.

The MAX9814 IC contains a low-noise amplifier, a variable gain amplifier (VGA) with automatic gain control, an output amplifier, and a microphone bias-voltage generator. The low-noise preamplifier gain is fixed to a 12dB gain, while the VGA has a dynamic gain from 0dB to  20dB and the output amplifier has gains of 8dB, 18dB, and 28dB. Without compression, the sum of all of the gain blocks result in an overall gain of 40dB, 50dB, or  60dB. The MAX9814 IC incorporates attack-/holdand-release timing circuitry that limits the MICOUT pin to a set voltage.

The MAX9814 compression circuitry monitors MICOUT and limits the peak voltage to TH. Gain compression is realized by the VGA, which automatically adjusts its gain to keep the output voltage peak equal to the set threshold. The VGA has 20dB of dynamic gain, which results  in  a  maximum gain compression of 20dB. The amplifier  overall  gain,  with  the  AGC  disabled,  can  be set to 40dB, 50dB, or 60dB using jumper JU2. With the AGC on and the output voltage fully compressed, the overall gain will be 20dB, 30dB, or 40dB.

The amplifier's output is compressed when the peak voltage amplitude at MICOUT exceeds the voltage set at  TH.  The  MAX9814 EV kit compression threshold is preset at 800mV. A custom threshold voltage can be programmed using resistors R1 and R2, and the 2V microphone bias output MICBIAS. Removing resistor R1 and applying a voltage source at the TH pad can also externally control the MICOUT threshold.

The input signal can either be applied to the RCA jack J2,  or  a  microphone can be connected between the MIC\_IN and SGND\_IN pads. The 2V microphone bias MICBIAS is connected to the MIC\_IN node via R3.

The MAX9814 attack time and attack/release ratio are set through jumpers JU3-JU6.

## Jumper Selection

## Shutdown

Jumper JU1 controls the shutdown mode of the MAX9814 EV kit . The shutdown function can be activated on the EV kit by installing a shunt across pins 2-3. The shutdown function can also be controlled by

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

removing the shunt on jumper JU1 and connecting an external controller to the SHDN pad. See Table 1 for jumper JU1 shutdown configurations.

Table 1. Shutdown Configuration (JU1)

| SHUNT POSITION   | SHDN PIN         | EV KIT FUNCTION                    |
|------------------|------------------|------------------------------------|
| 1-2              | Connected to VCC | MAX9814 enabled                    |
| 2-3              | Connected to GND | MAX9814 disabled                   |
| -                | Not connected    | SHDN driven by external controller |

## Gain Control

The MAX9814 maximum signal gain can be configured to 40dB, 50dB, or 60dB. Jumper JU2 selects the overall gain for the MAX9814 EV kit. See Table 2 for jumper JU2 gain control configurations.

Table 2. Gain Control Configuration (JU2)

| SHUNT POSITION   | GAIN PIN         |   MAXIMUM GAIN (dB) |
|------------------|------------------|---------------------|
| 1-2              | Connected to VCC |                  40 |
| 2-3              | Connected to GND |                  50 |
| -                | Not connected    |                  60 |

## MAX9814 Evaluation Kit

## Attack/Release Ratio Setting

Jumper JU3 sets the ratio of the attack time to the release time of the MAX9814 AGC circuit to ratios of 1:500, 1:2000, and 1:4000. See Table 3 for configuring the desired attack/release ratio using jumper JU3 position.

## Table 3. Attack/Release Ratio Configuration (JU3)

| SHUNT POSITION   | ATTACK/RELEASE PIN   | ATTACK/RELEASE RATIO   |
|------------------|----------------------|------------------------|
| 2-3              | Connected to GND     | 1:500                  |
| 1-2              | Connected to VCC     | 1:2000                 |
| -                | Not connected        | 1:4000                 |

Jumpers JU4, JU5, and JU6 configure the attack time. Capacitor C4 sets the attack time to 53µs. To increase the attack time, configure the shunts on JU4, JU5, and/or JU6, which change the total capacitance connected at the MAX9814 CT pin. See Table 4 for jumpers JU4, JU5, and JU6 configurations. Table 5 lists the attack/release times. The attack time can be estimated using the following equation:

<!-- formula-not-decoded -->

where CCT is in farads and the total connected capacitance.

Table 4. Attack Time Configuration (JU4, JU5, and JU6)

| JU4 SHUNT POSITION   | JU5 SHUNT POSITION   | JU6 SHUNT POSITION   |   CT PIN CAPACITANCE (µF) |   ATTACK TIME (µs) |
|----------------------|----------------------|----------------------|---------------------------|--------------------|
| Not installed        | Not installed        | Not installed        |                     0.022 |                 53 |
| Installed            | Not installed        | Not installed        |                     0.069 |                166 |
| Installed            | Installed            | Not installed        |                     0.169 |                406 |
| Installed            | Installed            | Installed            |                     0.389 |                937 |

Table 5. Attack/Release Times

| ATTACK TIME (µs)   | RELEASE TIMES (ms)   | RELEASE TIMES (ms)   | RELEASE TIMES (ms)   |
|--------------------|----------------------|----------------------|----------------------|
| ATTACK TIME (µs)   | 1:500                | 1:2000               | 1:4000               |
| 53                 | 26.4                 | 105.6                | 211.2                |
| 166                | 83                   | 332                  | 664                  |
| 406                | 203                  | 812                  | 1624                 |
| 937                | 468                  | 1874                 | 3748                 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9814 Evaluation Kit

Figure 1. MAX9814 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX9814 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9814 Evaluation Kit

Figure 3. MAX9814 EV Kit PCB-Component Guide

<!-- image -->

Figure 4. MAX9814 EV Kit PCB-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Janet Freed

5
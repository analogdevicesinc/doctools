<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX9722A evaluation kit (EV kit) is a fully assembled and tested circuit board that uses the MAX9722A to drive a stereo headphone in portable audio applications. The MAX9722A is a differential stereo headphone driver with DirectDrive. MAXIM's DirectDrive technology eliminates the need for DC-blocking capacitors on the output of the amplifier. Designed to operate from a 2.4V to 5.5V DC power supply, the EV kit is capable of delivering up to 70mW per channel into a 16 Ω load or 130mW per channel into a 32 Ω load and 0.009% THD+N at 1kHz.

The EV kit can also be used as a line driver that provides 2VRMS into a 1k Ω load from a single 5V supply. The MAX9722A EV kit also evaluates the MAX9722B.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| A1            |     1 | MAX9722AEUE (16-pin TSSOP)                                          |
| C1-C4         |     4 | 1µF ±20%, 16V plastic film capacitors (1210) Panasonic ECPU1C105MA5 |
| C5            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M     |
| C6-C11        |     6 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K      |
| J1            |     1 | 3.5mm stereo headphone jack                                         |
| JU1           |     1 | 3-pin header                                                        |
| JU2           |     1 | 2-pin header                                                        |
| R1-R8         |     8 | 10k Ω ± 1% resistors (0603)                                         |
| R9, R10       |     0 | Not installed, resistors (0603)                                     |
| R11           |     1 | 0 Ω ±5% resistor (1206)                                             |
| U1            |     1 | MAX9722AETE (16-pin TQFN, 3mm x 3mm)                                |
| None          |     2 | Shunts                                                              |
| None          |     1 | MAX9722A PC board                                                   |

## Features

- ♦ 2.4V to 5.5V Single-Supply Operation
- ♦ Drives Two Channels at 70mW per Channel into a 16 Ω load, 130mW per Channel into a 32 Ω load
- ♦ ≤ 2µA Shutdown Current
- ♦ Evaluates the MAX9722A or MAX9722B (IC and Component Replacement Required)
- ♦ Small 16-Pin TQFN (3mm x 3mm) Package
- ♦ Available in 16-Pin TSSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX9722AEVKIT | 0°C to +70°C | 16 TQFN-EP*  |

## Component Suppliers

| SUPPLIER   | PHONE         | FAX           | WEBSITE               |
|------------|---------------|---------------|-----------------------|
| Panasonic  | 714- 373-7366 | 714- 737-7323 | www.panasonic.com     |
| TDK        | 847- 803-6100 | 847- 390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX9722A when contacting these component suppliers.

## Quick Start

The MAX9722A EV kit is fully assembled and tested. Follow the steps listed below to verify board operation. Do not turn on the power supply until all connec-

tions are completed.

## Recommended Equipment

- 2.4V to 5.5V, 500mA power supply
- Audio signal source (i.e., CD or MP3 player)
- 16 Ω or 32 Ω headphone

## Procedure

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (EV kit ON).
- 2) Verify that no shunt is installed across jumper JU2 (remote GND sensing OFF).
- 3) Plug the headphone into headphone jack J1.
- 4) Connect the positive terminal of the power supply to the PVDD pad and ground terminal to the PGND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX9722A Evaluation Kit

- 5) Connect the left output of the audio source to the INPUTL- pad.
- 6) Connect the ground of the audio source to the INPUTL+ pad.
- 7) Connect the right output of the audio source to the INPUTR- pad.
- 8) Connect the ground of the audio source to the INPUTR+ pad.
- 9) Turn on the power supply.
- 10) Turn on the audio source.

## Detailed Description

The MAX9722A EV kit features the MAX9722A differential stereo headphone amplifier with DirectDrive, which is designed to directly drive a 16 Ω or 32 Ω stereo headphone in portable audio applications. The EV kit operates from a DC power supply that can provide 2.4V to 5.5V and 500mA of current. The EV kit accepts two sets of differential or single-ended audio inputs. The amplifier is able to deliver 70mW per channel into a 16 Ω load or 130mW per channel into a 32 Ω load.

The EV kit can also be used as an audio line driver to provide 2VRMS into a 1k Ω load from a single 5V supply. When used in this way, the EV kit features a remote ground-sensing network to reduce any ground loop noise at the receiving device (see the Remote Ground Sensing section).

## Jumper Selection

## Shutdown Mode (SHDN)

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9722A. See Table 1 for jumper positions.

## Remote Ground Sensing

Jumper JU2, resistors R9 and R10 configure the remote ground-sensing feature for the MAX9722A EV kit. See Table 2 for jumper shunt positions and approximate resistor values.

Note: When using the remote ground-sensing feature, remove resistors R3, R4, R7, and R8. Install a 10k Ω resistor at the R9 and R10 PC board pads. Replace R11 with a 10 Ω resistor. In this mode of operation, the input signals on the INPUTL- and INPUTR- pads are referenced to the EV kit PGND pad and are single ended. If headphones are used in this configuration, channel-tochannel isolation may be degraded.

## Evaluating the MAX9722B

The MAX9722A EV kit can evaluate the MAX9722B. To evaluate the MAX9722B, replace U1 with a MAX9722B and replace the components as outlined in Table 3.

Refer to the MAX9722A/MAX9722B data sheet for additional  information  on  using  the  MAX9722B as a headphone amplifier or as an audio line driver.

Table 1. JU1 Jumper Selection

| SHUNT POSITION                                                 | EV KIT FUNCTION                                             |
|----------------------------------------------------------------|-------------------------------------------------------------|
| 1-2 ( SHDN = high)                                             | EV kit enabled                                              |
| 2-3 ( SHDN = low)                                              | Shutdown mode                                               |
| None. External controller connected to SHDN pad (logic level). | SHDN driven by external controller. Shutdown is active low. |

Table 2. JU2 Jumper Selection

| SHUNT POSITION          | R9, R10   | R3, R4, R7, R8   |   R11 ( Ω ) | REMOTE GND SENSING   | EV KIT FUNCTION                                        |
|-------------------------|-----------|------------------|-------------|----------------------|--------------------------------------------------------|
| Not installed (default) | Open      | 10k Ω            |           0 | Not configured       | Differential inputs, output referenced to local ground |
| Installed               | 10k Ω     | Open             |          10 | Configured           | Single-ended inputs, output senses remoteground        |

Table 3. Component Values for Evaluating the MAX9722B

| COMPONENT   | EV KIT USES DIFFERENTIAL INPUTS; OUTPUT REFERRED TO LOCAL GROUND   | EV KIT USES SINGLE-ENDED INPUTS, OUTPUT SENSES REMOTE GROUND   |
|-------------|--------------------------------------------------------------------|----------------------------------------------------------------|
| U1          | MAX9722B                                                           | MAX9722B                                                       |
| R1, R5      | 0 Ω                                                                | 0 Ω                                                            |
| R2, R6      | Open                                                               | Open                                                           |
| R3, R7      | 15k Ω                                                              | Open                                                           |
| R4, R8      | 30k Ω                                                              | Open                                                           |
| R9          | Open                                                               | 30k Ω                                                          |
| R10         | Open                                                               | 15k Ω                                                          |
| R11         | 0 Ω                                                                | 10 Ω                                                           |
| JU2         | Not installed                                                      | Installed                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9722A Evaluation Kit

<!-- image -->

Figure 1. MAX9722A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9722A Evaluation Kit

<!-- image -->

Figure 2. MAX9722A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX9722A EV Kit PC Board Layout-Solder Side

Figure 3. MAX9722A EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX9722A EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
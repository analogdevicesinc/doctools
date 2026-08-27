<!-- lastmod 2022-08-03 -->
## General Description

TheMAx121evaluationkit(EVkit)isfullyassembled,and provides a proven design and PC board layout for fast easy evaluation of the MAx121 at sample rates to 312k samples per second (ksps).

The kit includes a 5MHz oscillator, shift register, and LED display;the onlyexternal signal required is an analog input.Optional jumpersontheboardmaybeconfigured so thatthekitcanbeusedwithexternalcircuits.The boardoperates incontinuous-conversionmode,or inconjunctionwithexternalclockandcontrolsignals. Connectorsprovide easy interfacebetween the MAx121 EV kit and the user's DsP or microprocessor system.

- +±5V Input Range
- 78dB SINAD
- Continuous-ConversionMode with 312.5ksps Operation Rate
- ?2 26-PinRibbonCableConnectorforConnectionto a User's DSP System
- ← On-Board LED Display
+ 3in2 Prototyping Area

## Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX121EVKIT-DIP | 0℃ to +70℃    | Through-Hole |

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                   |
|--------------------------|-------|-----------------------------------------------|
| C1                       |     1 | 0.01μF 50V ceramic capacitor (optional)       |
| C2, C4, C8               |     3 | 10μF 16V radial electrolytic capacitors       |
| C3, C5, C6, C9, C10, C11 |     6 | 0.1uF 50V ceramic capacitors                  |
| C7                       |     1 | 22uF50V low-ESRradial electrolytic capacitor* |
| D1-D14                   |    14 | Red LEDs                                      |
| IC1                      |     1 | MAX121CPE                                     |
| IC2, IC3                 |     2 | 74HC595shift registers                        |
| IC4                      |     1 | 5.0MHz crystal oscillator                     |
| R1                       |     1 | 0Ω 5% resistor                                |
| R2-R15                   |    14 | 620Ω 5%resistors                              |
| J1-J3                    |     3 | BNC connectors                                |
| JU1-JU6                  |     6 | 3-pin jumper headers                          |
| JU7                      |     1 | 2-pin jumper header                           |
| None                     |     7 | Shunts                                        |
| None                     |     1 | 3-pin power connector                         |
| None                     |     1 | 26-pin ribbon cable connector                 |
| None                     |     1 | 5.00"x 5.00"PC board                          |
| None                     |     4 | Rubberfeet                                    |
| None                     |     1 | MAX121data sheet                              |
| None                     |     1 | MAX121EVkit manual                            |

## MANUFACTURER

Nichicon Corporation,(708) 843-7500 Sanyo Electric Company.(619)661-6835 United Chemi-Con, (708) 696-2000 Matsuo Electronics.(714) 969-2491 Sprague Electric Company. (603) 224-1961

## И/IXVW/

For small orders, phone 408-737-7600 ext. 3468.

## PRODUCT LINE

PL series SA or SC series LXF series 267 series (surface-mount)

595Dseries(surface-mount)

MaximIntegratedProducts1

<!-- image -->

## MAX121 Evaluation Kit

Features

## MAX121 Evaluation Kit

## Quick Reference

The evaluation kit is shipped configured for the continuous-conversion mode. To verify operation, follow these steps:

- 1.Verify that the jumpers are configured as described in Table 2.
2. Connect the power supplies (+5V and -12V to -15V) to the power input connector.
3. Connect an analog input to the AlN input.
4. Read the conversion resuits on the LEDs.

## General Description

Seven jumpers on the evaluation board configure the kit for various modes of operation.Table 1lists the jumpers and their functions. Table 2 outlines the jumper configuration for the continuous-conversion mode. This modecanbeusedforboardverificationasweli as MAX121 evaluation. Refer to the MAX121 data sheet for full descriptions of the device operating modes.

Table 1. Jumper Functions

| JUMPER   | CONNECTION   | FUNCTION                                                         |
|----------|--------------|------------------------------------------------------------------|
| JU1      | 1&2 2&3      | SCLK output noninverted SCLK output inverted                     |
| JU2      | 1&2 2&3      | SFRM output noninverted SFRM output inverted                     |
| JU3*     | uedo         | MODE pin open(single conversion, BUSY output)                    |
| JU3*     | 1& 2         | MODE pin connected to VDD (Single conversion, INT output)        |
| JU3*     | 2&3          | MODE pin connected to GND(continuous conver- sions, BUSY output) |
| JU4      | 1&2          | External clock source connected to CKLIN                         |
| JU4      | 2&3          | On-board crystal oscillator connected to CLKIN                   |
| JU5      | 1&2          | External CS signal                                               |
| JU5      | 2&3          | CS connected to GND                                              |
| 9nr      | 1&2          | External CONVST signal                                           |
| 9nr      | 2&3          | CONVST connected to GND                                          |
| JU7      | Open         | LED display disabled                                             |
| JU7      | Shorted      | LED display enabled                                              |

*NOTE: The MODE pin must be set before power is applied to the device. To change the mode, turn power off, move the shunt,andrestore power.

Table 2. Jumper Configuration for ContinuousConversion Mode

| JUMPER   | CONNNECTION   | FUNCTION                        |
|----------|---------------|---------------------------------|
| JU1      | 2&3           | SCLK output inverted            |
| snr      | 2&3           | MODE pin connected to GND       |
| JU4      | 2&3           | oscillator Use on-board crystal |
| JU5      | 2&3           | CS connected to GND             |
| JU6      | 2&3           | CONVST connected to GND         |
| JU7      | Shorted       | LED display enabled             |

NOTE: TheSFRM signal isnotused,so thepositionofJU2 has no effect.

## Clock Circuit

The EV kit includesa 5.OMHz oscillator that allows the fastestpossibleconversionrate inthe continuousconversion mode.See Timing Diagrams section for detailed timing.

The MAX121 operates with an input clock (CLKIN) of 0.1MHz to 5.5MHz. Conversion accuracy will deteriorate outside of this range due to track/hold charge times at higher frequencies.

Touseanexternalclock,configureJU4forexternal clock source (shunt across 1 &amp; 2) and connect the clock source to J1 (EXT CLOCK). A clock rate up to 5.5MHzmaybeusedwhentheconversionrateallows greater than 400ns acquisition time.

## Shift-Register Circuit

The evaluation kit uses a pair of 74HC595 shift registerstoconvert theMAx121'sserialoutputtoaparallel format for display on the LEDs.The latched data is alsoavailableonthe26-pindataconnector.

The 74HC595 serial clock(SCLK) is driven by the MAX121's SCLK output.The MAX121'sinvert-clock pin (INvCLK) must be grounded so that the SCLK output has the proper timing relationship to the data output pin (SDATA). The 74HC595 latching signal (RCLK) is driven by the MAX121's frame-start output (FSTRT). A

<!-- image -->

rame-start pulse cccurs every 16 clock cycles in the continuous-conversion mode.Figure 1's timing diagram illustrates the start of a conversion cycle.

The 74HC595 shift register is offset one bit because of he relationship of the frame-start pulse to the data stream.Figure 1 shows the single SCLKcycle that Dccurs between the shift-register latch(FSTRT positive 3dge) and the MSB value appearing on SDATA. The 14 oitsofdatafromtheMAx121arethenloadedserially nto shift register on the following clock cycles.The timng diagram in Figure 2 illustrates a fufl conversion cycle.

The 74HC595 shift-register circuit may not function oroperly when external chip-select (Cs) or conversionstart (CONVST) signals are used. The LED display shouldbedisabled and theMAx121serial output moniored by other means.

The LED display on the output of the shift registers is for convenience only.It may induce some noise when the

## MAX121 Evaluation Kit

input code is near a major carry. The worst code would be 0 to -1 (00000000000000B 11111111111111B). The LED display should be disabled for critical noise or accuracy measurements.The output code can be monitored by the user's DSP system, or by observing the MAx121's SDATA pin with a scope.

## Timing Diagrams

Figure 1 is the timing diagram for the MAX121 EV kit in the continuous-conversion mode. The kit is shipped with a 5.0MHz crystal oscillator so the 16 clock-cycle conversion is 3.2us (312.5ksps). This is the fastest usable rate in the continuous-conversionmodebecause the acquisition time (2 clock periods) must be a minimum of 400ns. Aithough the data sheet indicates a maximumrate of 308ksps, the 312.5ksps rate is valid in continuous-conversion mode at room temperature.The data-sheet specificationreflects the conditions used for production testing. The MAx121 is guaranteed over temperature at 308ksps.

<!-- image -->

Figure 1. MAX121 Conversion Start

<!-- image -->

## MAX121 Evaluation Kit

Figure 2. MAX121 EV Kit Continuous-Conversion Mode Timing

<!-- image -->

## Applications Information

The equivalent circuit for the MAx121 input is a 6kQ resistor connected to -5v.This requires a low-impedance source to drive the MAx121. A high-frequency op amp such as the OP-27 is a good choice for this application. Optional capacitor C1 helps to provide a low AC source impedance at the MAX121 input..

A board location for a single-pole fiter is provided at the input of the MAx121; however, the presence of R1 will induce a gain error because of the MAx121's 6k2 input resistance.For example,a 51Ωresistorwill induce approximately 1% (51/6000) gain error. For any given filter, R1 should be as low as possible, and the capacitor C1 shouid be selected for the proper frequency.

The reference-voltage pin (VREF) must be bypassed to analog ground (AGND) with a 0.1μF ceramic capacitor and 22uFlow-ESRelectrolyticcapacitor.Thefarge-vaiue electrolytic capacitor should have the lowest possible equivalent series resistance (ESR). It is also important to keep the capacitor's leads (or traces) as short as possible.

When observing the LED display as the input is slowly varied, the LSB changes in brightness, but is never 100% on or off. When the device is used in DSP applications, where large numbers of samples are taken, the noise is effectivelyreducedthroughaveraging.

Figure3.MAX121EVKit Schematic

## MAX121 Evaluation Kit

<!-- image -->

## MAX121 Evaluation Kit

Figure4.MAX121EVKitComponentPlacementGuide

<!-- image -->

Figure5.MAX121EVKitComponent-SideLayout

## MAX121 Evaluation Kit

<!-- image -->

## MAX121 Evaluation Kit

Figure6.MAx121EVKitSolder-SideLayout

<!-- image -->

8

MaximIntegratedProducts,120SanGabrielDrive,Sunnyvale,CA94086408-737-7600
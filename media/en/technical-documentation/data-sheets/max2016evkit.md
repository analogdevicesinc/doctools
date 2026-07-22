<!-- lastmod 2022-08-04 -->
## General Description

The MAX2016 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that allows for easy evaluation  of  the  MAX2016  dual  logarithmic detector/controller.  The  MAX2016 EV kit includes connections to operate the device as a detector or as a controller.  The  RF  inputs  utilize  50 Ω SMA connectors for convenient connections to test equipment.

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE        |
|-----------------------|--------------|----------------|
| AVX Corp.             | 803-946-0690 | www.avx.com    |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com |

Note: Indicate that you are using the MAX2016 when contacting these component suppliers.

| DESIGNATION      |   QTY | DESCRIPTION                                                             |
|------------------|-------|-------------------------------------------------------------------------|
| C1, C2, C8, C9   |     4 | 680pF ± 5%, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H681J     |
| C3, C6, C10, C13 |     4 | 33pF ± 5%, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H330J      |
| C4, C7, C11, C14 |     4 | 0.1µF ± 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K    |
| C5, C12, C15     |     0 | Not installed, capacitors (0603)                                        |
| C16, C17         |     0 | Not installed, capacitors (0402)                                        |
| C18              |     1 | 10µF ± 10%, 16V tantalum capacitor (C case) AVX TAJC106K016R            |
| J1, J2           |     2 | PCB edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                 |
|--------------------|-------|-----------------------------------------------------------------------------|
| R1-R5              |     5 | 0 Ω resistors (0402) Any                                                    |
| R6                 |     1 | 0 Ω resistor (1206) Any                                                     |
| R7-R10             |     0 | Not installed, resistors                                                    |
| TP1                |     1 | Large test point for 0.062in PCB (red) Mouser 151-107 or equivalent         |
| TP2, TP4, TP9      |     3 | Large test points for 0.062in PC board (black) Mouser 151-103 or equivalent |
| TP3, TP5-TP8, TP10 |     6 | Large test points for 0.062in PC board (white) Mouser 151-101 or equivalent |
| TP11, TP12, TP13   |     0 | Not installed, test points                                                  |
| U1                 |     1 | MAX2016ETI †                                                                |
| -                  |     1 | PCB: MAX2016EVKIT                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

- ♦ Complete Gain and VSWR Detector/Controller
- ♦ Dual-Channel RF Power Detector/Controller
- ♦ Low Frequency to 2.5GHz Frequency Range
- ♦ Exceptional Accuracy Over Temperature
- ♦ High 80dB Dynamic Range
- ♦ 2.7V to 5.25V* Supply Voltage Range
- ♦ Internal 2V Reference
- ♦ Scaling Stable Over Supply and Temperature Variations
- ♦ Controller Mode with Error Output
- ♦ Available in 5mm x 5mm, 28-Pin Thin QFN Package

* See the Power-Supply Connection section.

## Ordering Information

| PART         | TEMP RANGE         | PIN-PACKAGE      |
|--------------|--------------------|------------------|
| MAX2016EVKIT | -40 ° C to +85 ° C | 28 Thin QFN-EP** |

## MAX2016 Evaluation Kit

## Quick Start

The MAX2016 EV kit is fully assembled and factory tested. See the Connections and Setup section for proper device evaluation.

## Recommended Equipment

- One DC power supply capable of delivering between 2.7V and 5.25V at 100mA (see the Power-Supply Connection section for supply voltages &gt; 3.6V).
- Two signal generators capable of delivering -65dBm to  +5dBm at frequencies between 100MHz and 2.5GHz.
- One high-dynamic-range RF power meter for calibrating the signal generator.
- Five digital multimeters (DMMs) to monitor supply voltage, supply current, and output voltages.
- Two 6dB attenuator pads.

## Connection and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to prevent damaging the device, do not turn

## on the DC power or the RF signal generator until all connections are made:

- 1) With the DC power supply disabled, set it to +3.3V (through a low internal-resistance ammeter, if desired) and connect to the VS (TP1) terminal. Connect the power-supply ground to the GND (TP2) terminal on the EV kit. If available, set the current limit to 100mA.
- 2) Calibrate the power meter at 100MHz.
- 3) Connect the RF signal generators to the power meter through a 6dB attenuator pad.
- 4) Calibrate the signal generator's output (frequency =  100MHz)  over  the  desired  power  range. Note: Some power meters may be limited in terms of their dynamic range.
- 5) Disable the RF signal generator output powers. Disconnect the power meter from the attenuator pad and connect these pad outputs to the RFINA and RFINB SMAs on the EV kit.
- 6) Connect the VOUTA, VOUTB, and VOUTD wires to three voltmeters. Enable the DC power supply. The DC current of the EV kit should be approximately 43mA.

Figure 1. MAX2016 EV Kit Test Setup Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 7) Enable the output powers of the RF signal generators.
- 8) Using the calibration results from step 4, set the generator outputs to produce -30dBm into RFINA and RFINB.
- 9) Verify that an output voltage at VOUTA and VOUTB of  approximately 1.3V is measured on the voltmeters.
- 10) Verify that an output voltage at VOUTD of approximately 1V is measured on the voltmeter.
- 11) Adjust the signal-generator power levels up and down to see a corresponding change in VOUTA, VOUTB, and VOUTD.

## Detailed Description

The MAX2016 EV kit is a fully assembled and tested surface-mount PCB that evaluates the MAX2016 dual logarithmic detector/controller. The RF inputs utilize 50 Ω SMA connectors for convenient connections to test equipment.

## Individual Log Amps (VOUTA and VOUTB)

The MAX2016 uses two individual log amps to measure the input power applied to RFINA and RFINB. These amplifiers are normally configured in detector mode to provide an output signal proportional to the applied input power level. The individual log amp output can also be operated in a controller mode, if desired, to control an external device using the input power as the control parameter.

## Detector Mode

The MAX2016 EV kit is assembled with a 0 Ω resistor for R1 and R2. This sets the slope of the individual log amp output  signal  to  approximately  18mV/dB  (RF  = 100MHz). To increase the slope of either individual output signals, VOUTA or VOUTB, increase the value of R1 or  R2,  respectively.  For  example,  if  a  40k Ω resistor  is used for R1, the slope for the VOUTA signal increases to 36mV/dB.

## Power-Controller Mode

For operation of either VOUTA or VOUTB in controller mode, remove R1 or R2. A set-point voltage must then be applied to the SETA or SETB inputs. Use a DAC, an external precision voltage supply, or the internal reference output and resistor-divider string to apply the setpoint voltage to SETA or SETB. Operate SETA or SETB at  voltages  between 0.6V and 1.6V. RFINA or RFINB are connected to the RF source and the VOUTA or VOUTB is connected to the gain-control pin of the system under control.

<!-- image -->

## MAX2016 Evaluation Kit

Figure 2. Power-Controller Mode

<!-- image -->

In the power-controller mode (Figure 2), the DC voltage at OUTA or OUTB controls the gain of the PA leading to a constant output power level. ( Note: Only one controller  channel is  shown within the figure. Since the MAX2016 is a dual controller/detector, the second channel can be easily implemented by using the adjacent set of input and output connections).

## Difference Amplifier (VOUTD)

## Comparator

The MAX2016 integrates two comparators to monitor the difference in power levels (gain) of the RFINA and RFINB. By default, R4 and R5 are set to be 0 Ω . Therefore, CSETL and CSETH are connected to VCC, thus disabling the comparator operations. To enable the comparator operations, R4 and R5 must be removed. Load C16 and C17 with 0.1µF capacitors. Use the reference voltage from the MAX2016 to generate two voltages through a resistor-divider network (R7/R8 and R9/R10) to set the CSETH and CSETL trip points. Alternately, R4, R5, and R7-R10 can be removed and external voltages applied at CSETH and CSETL to set the comparator trip points. Be sure to observe the voltage limits specified in the MAX2016 data sheet.

The logic outputs at each comparator monitor the gain independently. The COR output, (A + B), ORs the outputs of both comparators to tell whether the gain of the amplifier falls in the range. For more information, refer to the Applications Information section in the MAX2016 data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2016 Evaluation Kit

## Detector Mode

The MAX2016 EV kit is assembled with a 0 Ω resistor for R3. This sets the slope of the difference output signal, VOUTD, to approximately -25mV/dB (RF = 100MHz). To increase the slope of the difference output signal, increase the value of R3. For example, if a 20k Ω resistor  is  used  for  R3,  the  slope  for  the  difference  signal increases to -50mV/dB.

The bandwidth and response time of the difference output amplifier can be controlled with an external capacitor,  C15.  With  no  external  capacitor,  the  bandwidth  is greater  than  20MHz.  Refer  to  the Applications Information section in the MAX2016 data sheet for the equation to calculate the required capacitance.

## Gain-Controller Mode

The MAX2016 can be used as a gain controller within an automatic gain-control (AGC) loop. In the gain-controller mode, remove R3. As shown in Figure 3, RFINA and RFINB monitor the VGA's input and output power levels, respectively. The MAX2016 produces a DC voltage at VOUTD that is proportional to the difference in these two RF input power levels. An internal op amp compares the DC voltage with a reference voltage at SETD. The op amp increases or decreases the voltage at  VOUTD until VOUTD equals to SETD. Thus, the MAX2016 adjusts the gain of the VGA to a level determined by the voltage applied to SETD. Operate SETD between 0.5V and 1.5V for the best dynamic range.

## Frequency-Response Modifications

The MAX2016 EV kit has been optimized to support a minimum operating frequency of 100MHz. However, if desired, the kit can be modified to operate at a lower frequency. The EV kit design includes external capacitors  (C5  and C12) to lower the frequency operation below 100MHz. These capacitors should be loaded in conjunction with changes in the values of C1, C2, C8, and C9 to lower the input frequency range below 100MHz. Refer to the Applications Information section in the MAX2016 data sheet for the equation to calculate the required capacitance.

## Power-Supply Connection

The MAX2016 is designed to operate from a single +2.7V to +3.6V supply. To operate under a higher supply voltage range, a resistor must be connected in series with the power supply and VCC to reduce the voltage delivered to the chip. For a +4.75V to +5.25V supply, change R6 to a 37.4 Ω (±1%) resistor.

## Layout Considerations

The MAX2016 evaluation board can be a guide for board layout. Pay close attention to the thermal design

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. In the Gain-Controller Mode, the VOUTD Maintains the Gain of the VGA

<!-- image -->

and close placement of the parts to the IC. The MAX2016 package exposed paddle (EP) conducts heat from the part and provides a low-impedance electrical connection. The EP must be attached to the PCB ground plane with a low thermal and electrical contact. Ideally, this can be achieved by soldering the backside package contact directly to a top metal ground plane on the PCB. Alternatively, the EP can be connected to a ground plane using an array of plated vias directly below the EP. The MAX2016 EV kit uses nine equally spaced, 0.012in-diameter, plated through holes to connect the EP to the lower ground planes.

Keep the input traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PCB. The isolation of the RF inputs is dependent upon the layout of these traces, which must be physically  isolated  from  one  another  for  optimum performance. Each power-supply node on the PCB should have its own decoupling capacitor. This minimizes supply coupling from one section of the PCB to another. Using a star topology for the supply layout, in which each powersupply node in the circuit has a separate connection to the central node, can further minimize coupling between sections of the PCB.

## MAX2016 Evaluation Kit

Figure 4. MAX2016 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2016 Evaluation Kit

Figure 5. MAX2016 EV Kit Component Place Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2016 Evaluation Kit

<!-- image -->

Figure 6. MAX2016 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

Figure 7. MAX2016 EV Kit PCB Layout-Top Solder Mask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2016 Evaluation Kit

<!-- image -->

Figure 8. MAX2016 EV Kit PCB Layout-Top Layer Metal

<!-- image -->

Figure 10. MAX2016 EV Kit PCB Layout-Inner Layer 3 (Routes)

Figure 9. MAX2016 EV Kit PCB Layout-Inner Layer 2 (GND)

<!-- image -->

Figure 11. MAX2016 EV Kit PCB Layout-Bottom Layer Metal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 12. MAX2016 EV Kit PCB Layout-Bottom Solder Mask

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-9

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9

## MAX2016 Evaluation Kit

Figure 13. MAX2016 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->
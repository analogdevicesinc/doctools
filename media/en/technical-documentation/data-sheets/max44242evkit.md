<!-- lastmod 2022-08-03 -->
## MAX42 Evaluation Kit

## General Description

The MAX44242 evaluation kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  MAX44242  low-input  bias current,  low-noise  operational  amplifier  (op  amp)  in  an 8-pin  µMAX ®   package.  The  EV  kit  circuit  is  preconfigured  as  noninverting  amplifiers,  but  can  be  adapted  to other  topologies  by  changing  a  few  components.  The component pads accommodate 0805 packages, making them easy to solder and replace. The EV kit comes with a MAX44242AUA+ installed.

## Features and Benefits

- Accommodates Multiple Op-Amp Configurations
- Rail-to-Rail Outputs
- Accommodates Easy-to-Use 0805 Components
- 2.7V to 20V Single Supply or ±1.35V to Q 10V Dual Supplies
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX44242 EV kit
- +5V, 10mA DC power supply (PS1)
- Two precision voltage sources
- Two digital multimeters (DMMs)

Ordering Information appears at end of data sheet.

μMAX is a registered trademark of Maxim Integrated Products, Inc.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that the jumpers are in their default position, as shown in Table 1.
- 2) Connect the positive  terminal  of  the  +5V  supply  to VDD and the negative terminal to GND and VSS.
- 3) Connect the positive terminal of the precision voltage source to INAP. Connect the negative terminal of the precision voltage source to GND.
- 4) Connect INAM to GND.
- 5) Connect the positive terminal of the second precision voltage source to the INBP pad. Connect the negative terminal of the precision voltage source to GND.
- 6) Connect INBM to GND.
- 7) Connect the DMMs to monitor the voltages on OUTA and  OUTB.  With  the  10kΩ  feedback  resistors  and 1kΩ series resistors,  the  gain  of  each  noninverting amplifier is +11.
- 8) Turn on the +5V power supply.
- 9) Apply  100mV  from  the  precision  voltage  sources. Observe  the  output  at  OUTA  and  OUTB  on  the DMMs. Both should read approximately +1.1V.
- 10)  Apply  400mV  from  the  precision  voltage  sources. Both  OUTA  and  OUTB  should  read  approximately +4.4V.

<!-- image -->

Evaluates: MAX42

Table 1. Jumper Descriptions (JU1-JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                     |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Installed*       | Connects INAM to R1. Also shorts capacitor C5.                                                                                  |
| JU1      | Open             | Connects INAM to R1 through capacitor C5. When AC-coupling is desired, remove the shunt and install capacitor C5.               |
| JU2      | Installed*       | Connects INAP to JU3 position 1. Also shorts capacitor C6.                                                                      |
| JU2      | Open             | Connects INAP to JU3 position 1 through capacitor C6. When AC-coupling is desired, remove the shunt and install capacitor C6.   |
| JU3      | 1-2*             | Connects INAP to JU2 and C6 through R2 and R8                                                                                   |
| JU3      | 2-3              | Connects INAP to GND through R2 and R8                                                                                          |
| JU4      | Installed*       | Connects OUTAto OUTA                                                                                                            |
| JU4      | Open             | Connects OUTAto OUTAthrough capacitor C10. When AC-coupling is desired, remove the shunt and install capacitor C10.             |
| JU5      | Installed*       | Connects INBM to R11. Also shorts capacitor C15.                                                                                |
| JU5      | Open             | Connects INBM to R11 through capacitor C15. When AC-coupling is desired, remove the shunt and install capacitor C15.            |
| JU6      | Installed*       | Connects INBP to JU6 position 1. Also shorts capacitor C16.                                                                     |
| JU6      | Open             | Connects INBP to JU6 position 1 through capacitor C16. When AC-coupling is desired, remove the shunt and install capacitor C16. |
| JU7      | 1-2*             | Connects INBP to JU7 and C16 through R12 and R18                                                                                |
| JU7      | 2-3              | Connects INBP to GND through R12 and R18                                                                                        |
| JU8      | Installed*       | Connects OUTB to OUTB                                                                                                           |
| JU8      | Open             | Connects OUTB to OUTB through capacitor C20. When AC-coupling is desired, remove the shunt and install capacitor C20.           |

## Detailed Description of Hardware

The MAX44242 EV kit provides a proven layout for the MAX44242 low input bias current, low-noise dual op amp.

The  IC  is  a  single-supply  dual  op  amp  whose  primary application is operating in the noninverting configuration; however, the IC can operate with a dual supply as long as the voltage across the VDD and GND pins of the IC do not exceed the absolute maximum ratings. When operating with a single supply, short VSS to GND.

## Op-Amp Configurations

The IC is a single-supply dual op amp ideal for differential sensing,  noninverting  amplification,  buffering,  and  filtering. A few common configurations are shown in the next few sections.

Evaluates: MAX44242

The following sections explain how to configure one of the device's op amps (op-amp A). To configure the device's second op amp (op-amp B), the same equations can be used after modifying the component reference designators. For op-amp B, the equations should be modified by adding 10 to the number portion of the reference designators (e.g., for the noninverting configuration, equation R1 becomes R11 and R5 becomes R15).

## Noninverting Configuration

The  EV  kit  comes  preconfigured  as  a  noninverting amplifier. The gain is set by the ratio of R5 and R1. The EV kit comes preconfigured for a gain of +11. The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

│

## MAX44242 Evaluation Kit

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3, and R5 with appropriate resistors.  When R1 = R2 and R3 = R5, the CMRR of the differential amplifier  is  determined  by  the  matching  of  the  resistor  ratios R1/R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Filter Configuration

The Sallen-Key filter topology is ideal for filtering sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and  buffer  operations. The  EV  kit  can  be  configured  in a  Sallen-Key  topology  by  replacing  and  populating  a few  components.  The  Sallen-Key  topology  is  typically configured as a unity-gain buffer, which can be done by replacing R1 and R5 with 0Ω resistors and short JU2. The noninverting signal is applied to the INAP test point with JU2 short and short pins 1-2 on JU3 or do the same on the INBP pad similarly. The filter component pads are R2-R4, and R8, where some have to be populated with resistors and others with capacitors.

## Lowpass Sallen-Key Filter

To  configure  the  Sallen-Key  as  a  lowpass  filter,  populate the  R2  and  R8  pads  with  resistors,  and  populate  the  R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- image -->

## Evaluates: MAX44242

## Highpass Sallen-Key Filter

To configure the Sallen-Key as a highpass filter, populate the R3 and R4 pads with resistors and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

## Transimpedance Application

To configure op-amp U1-A as a transimpedance amplifier (TIA),  replace R1  with  a  0Ω resistor and  install  a shunt on jumper JU1 and shunt on pins 2-3 on jumper JU3. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where R4 is installed as a 10kΩ resistor, I IN  is defined as the input current source applied at the INAM pad, I BIAS  is the input bias current, and V OS  is the input offset voltage of the op amp. Use capacitor C8 (and C7, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance. Similarly, we can configure op-amp U1-B for transimpedance application.

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier, replace R6 (R16 for U1-B) with a suitable resistor value to improve amplifier  phase  margin. The  R6/C9 (R16/C19 for  U1-B)  filter can also be used as an anti-alias filter, or to limit amplifier output noise by reducing its output bandwidth.

│

## MAX44242 Evaluation Kit

## Component List

| DESIGNATION                                  |   QTY | DESCRIPTION                                   |
|----------------------------------------------|-------|-----------------------------------------------|
| C1, C3                                       |     2 | 0.1µF ±10%, 25V X7R ceramic capacitors (0805) |
| C2, C4                                       |     2 | 4.7µF ±10%, 25V X5R ceramic capacitors (0805) |
| C5-C10, C15-C20                              |     0 | Not installed, ceramic capacitors (0805)      |
| GND                                          |     2 | Black test points                             |
| INAM, INAP, INBM, INBP, OUTA, OUTB, VDD, VSS |     8 | Red test points                               |
| JU1, JU2, JU4-JU6, JU8                       |     6 | 2-pin headers                                 |
| JU3, JU7                                     |     2 | 3-pin headers                                 |

Evaluates: MAX44242

| DESIGNATION               |   QTY | DESCRIPTION                                                         |
|---------------------------|-------|---------------------------------------------------------------------|
| R1, R2, R11, R12          |     4 | 1kΩ ±1% resistors (0805)                                            |
| R3, R4, R7, R13, R14, R17 |     0 | Not installed, resistors (0805)                                     |
| R5, R15                   |     2 | 10kΩ ±1% resistors (0805)                                           |
| R6, R8, R16, R18          |     4 | 0Ω ±5% resistors (0805)                                             |
| TP1, TP2                  |     0 | Not installed, miniature test points                                |
| U1                        |     1 | Dual low-power, rail-to-rail I/O op amp (8 µMAX) Maxim MAX44242AUA+ |
| -                         |     8 | Shunts                                                              |
| -                         |     1 | PCB: MAX44242 EVKIT                                                 |

│

Figure 1. MAX44242 EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX44242 EV Kit Component Placement GuideComponent Side

Figure 3. MAX44242 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44242 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44242EVKIT# | EV Kit |

# Denotes ROHS compliant.

Evaluates: MAX44242

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. 0a[iP Integrated reserves the right to change the circuitr\ and speci¿cations without notice at an\ tiPe.

│

Evaluates: MAX44242
<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9503G evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX9503G, as well as the MAX9503M and MAX9505 ICs. All of these ICs filter, amplify, and set the black level to ground for standard-definition video signals. These ICs feature an internal reconstruction filter that has 3dB attenuation at 9MHz, 50dB attenuation at 27MHz, and ±1dB passband flatness to 5.5MHz.

Both the MAX9503G and MAX9505 provide a +6dB gain,  while  the  MAX9503M provides a +12dB gain. The MAX9505 includes an analog switch that can be configured as a video input, a video output, or a microphone input.

Video input and output signals from the EV kit are DCcoupled, eliminating large DC-blocking capacitors. The EV kit's input terminal has 75 Ω termination to ground. The EV kit's output has a 75 Ω back-termination resistor. The EV kit operates from a single 2.7V to 3.6V power supply.

| DESIGNATION    |   QTY | DESCRIPTION                                                       |
|----------------|-------|-------------------------------------------------------------------|
| C1, C3         |     2 | 0.1µF ± 10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K |
| C2, C4, C6, C7 |     4 | 1µF ± 10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K   |
| C5             |     0 | Not installed, capacitor (0603)                                   |
| JU1, JU2       |     2 | 3-pin headers                                                     |
| R1             |     1 | 100k Ω ± 1% resistor (0603)                                       |
| R2, R3         |     2 | 75 Ω ± 1% resistors (0603)                                        |

## Features

- ♦ Single 2.7V to 3.6V Supply Operation
- ♦ DC-Coupled Input/Output
- ♦ Video Output Black Level Set to Ground
- ♦ Reconstruction Filter with 50dB Attenuation at 27MHz and ±1dB Passband to 5.5MHz
- ♦ Preset Gains: +6dB (MAX9503G/MAX9505), +12dB (MAX9503M)
- ♦ 1.8 Ω RON Analog Switch (MAX9505)
- ♦ 10nA Shutdown Current
- ♦ Small 16-Pin TQFN Package (ICs Available in 16-Pin QSOP or 16-Pin TQFN)
- ♦ Fully Assembled and Tested
- ♦ Evaluates MAX9503M or MAX9505 (IC Replacement Required)

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE               |
|---------------|---------------|--------------------------|
| MAX9503GEVKIT | 0°C to +70°C* | 16 TQFN-EP** (3mm x 3mm) |

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                |
|---------------------|-------|--------------------------------------------|
| R4                  |     0 | Not installed, resistor (0603)             |
| R5                  |     1 | 0 Ω ± 5% resistor (0603)                   |
| U1                  |     1 | MAX9503GETE (16-pin TQFN 3mm x 3mm)        |
| COM, VIDIN, VID_OUT |     3 | 75 Ω BNC PC-board-mount jack connectors    |
| N/A                 |     2 | Shunts                                     |
| N/A                 |     1 | MAX9503G/MAX9503M/ MAX9505 EV kit PC board |

## Component Supplier

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate that you are using the MAX9503G EV kit when contacting this supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX9503G Evaluation Kit

## Quick Start

## Recommended Equipment

- 2.7V to 3.6V, 500mA DC power supply (VDD)
- Video signal generator
- Video measurement equipment (e.g., Tektronix VM-700T)

The MAX9503G EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed .

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (EV kit ON).
- 2) Connect the power-supply ground to the SGND pad on the EV kit.
- 3) Connect the 2.7V to 3.6V supply to the VDD pad on the EV kit.
- 4) Connect the output of the video signal generator to the VIDIN BNC connector on the MAX9503G EV kit. The video signal must be biased such that the sync tip is at ground .
- 5) Connect the VID\_OUT BNC connector on the EV kit to the input of the video measurement equipment.
- 6) Set the video signal generator for the desired video input signal, such as multiburst sweep. This signal must contain sync information.
- 7) Turn on the power supply and enable the video signal generator.
- 8) Analyze the video output signal with the VM-700T video measurement equipment.

## Detailed Description

The MAX9503G EV kit is designed to evaluate the MAX9503G, as well as the MAX9503M and MAX9505 ICs. All  of  these  ICs  filter,  amplify,  and  set  the  black level  to  ground  for  standard-definition  video  signals. The EV kit comes with a MAX9503G IC installed.

The MAX9503G/MAX9503M/MAX9505 ICs feature an internal reconstruction filter that has 3dB attenuation at 9MHz, 50dB attenuation at 27MHz, and ±1dB passband flatness to 5.5MHz.

Both the MAX9503G and MAX9505 have +6dB gain, while the MAX9503M has +12dB gain. The MAX9505 includes a 1.8 Ω analog switch. The MAX9505 analog switch can be set to an extended-range switch mode or normal switch mode (see Table 2). The extended-range switch mode allows signals from -2V to VDD, while the normal switch mode allows signals from 0V to VDD.

When the EV kit operates in video output mode, the VIDIN and VID\_OUT BNC connectors are used as the video input and output, respectively. When the EV kit operates in extended-range or normal switch mode (MAX9505), the VID\_OUT BNC connector is used as the analog switch input, and the COM BNC connector is  used  as  the  analog  switch  output.  The  EV  kit  also provides an option to terminate the analog switch output; resistors R4 and R5 can be installed to provide termination for the analog switch output.

The MAX9503G EV kit's video input and output signals are DC-coupled, eliminating large DC-blocking capacitors. The EV kit's input terminal has a 75 Ω termination to ground. The EV kit's output has a 75 Ω back-termination  resistor  and  operates  from  a  single  2.7V  to  3.6V power supply.

The EV kit can also evaluate the MAX9503M or the MAX9505. See the Evaluating the MAX9503M or the Evaluating the MAX9505 sections for additional information.

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown mode ( SHDN ) of the MAX9503G or MAX9503M ICs. In shutdown mode, the quiescent current of the IC is typically 10nA. See Table 1 for shunt positions.

## Jumper JU2 (NC)

Do not install a shunt on jumper JU2 when evaluating the MAX9503G or MAX9503M ICs.

## Evaluating the MAX9503M

To  evaluate  the  MAX9503M,  replace  U1  with  a MAX9503M. The MAX9503M has identical pinout and internal features as the MAX9503G, except its amplifier gain is +12dB. Refer to the MAX9503 IC data sheet for additional information.

## Table 1. JU1 Jumper Selection

| SHUNT POSITION   | SHDN PIN   | EV KIT FUNCTION   |
|------------------|------------|-------------------|
| 1-2 (Default)    | High       | Enabled           |
| 2-3              | Low        | Disabled          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9503G Evaluation Kit

## Evaluating the MAX9505

## MAX9505 Mode Selection (MODE0, MODE1)

To evaluate the MAX9505, replace U1 with a MAX9505. The MAX9505 has the same amplifier gain (+6dB) as the MAX9503G. The MAX9505 features an analog switch that can be used for microphone input, video input, and video output. Refer to the MAX9505 IC data sheet for additional information.

## Table 2. JU1 and JU2 Jumper Selection

| MAX9505 OPERATING MODE      | JU1 (MODE1)   | JU2 (MODE0)   | EV KIT FUNCTION                                                         |
|-----------------------------|---------------|---------------|-------------------------------------------------------------------------|
| Shutdown Mode               | 2-3 (low)     | 2-3 (low)     | Video output has 4k Ω resistance to ground. Analog switch is open.      |
| Extended-Range Switch Mode  | 2-3 (low)     | 1-2 (high)    | Video output is high impedance. Analog switch range is from -2V to VDD. |
| Video Output Mode (Default) | 1-2 (high)    | 2-3 (low)     | Video output is in normal operation. Analog switch is open.             |
| Normal Switch Mode          | 1-2 (high)    | 1-2 (high)    | Video output is high impedance. Analog switch range is from 0V to VDD.  |

<!-- image -->

Figure 1. MAX9503G EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The MAX9505 features two logic inputs to set the device in one of the following four modes: shutdown mode, extended-range switch mode, video-output mode, or normal switch mode. Jumpers JU1 and JU2 on the EV kit select the operating mode for the MAX9505. Table 2 lists the selectable jumper options.

## MAX9503G Evaluation Kit

Figure 2. MAX9503M Application Circuit

<!-- image -->

Figure 3. MAX9505 Application Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9503G Evaluation Kit

<!-- image -->

Figure 4. MAX9503G EV Kit Component Placement GuideComponent Side

Figure 5. MAX9503G EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX9503G EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5
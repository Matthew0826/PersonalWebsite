% Systems Project Part 2 Part E
clear; clear all; clc;

Lcm = 12;        % Height of center of mass from base in m
F = 845000;       % Main engine thrust force in N
J = 3540000;      % Moment of inertia about the center of mass in kg*m^2

kd_theta = 1.884;  % Gain factor for aerodynamic forces
kp_theta = 2.217;
kp_x = 0.7622;
kd_x = 3.049;

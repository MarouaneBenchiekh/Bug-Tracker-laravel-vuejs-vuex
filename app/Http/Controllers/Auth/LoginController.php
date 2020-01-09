<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Socialite;
use Auth;
use App\User;
class LoginController extends Controller
{
    
    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
        /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return Response
     */
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return Response
     */
    public function handleProviderCallback($provider)
    {
        $user = Socialite::driver($provider)->stateless()->user();
        $authUser= $this->findOrCreateUser($user,$provider);
        Auth::login($authUser,true);
        return redirect($this->redirectTo);
    }

    public function findOrCreateUser($user,$provider)
    {
        $authUser=User::where('provider_id',$user->id)->first();
        if($authUser){
            return $authUser;
        }
        return User::create([
            'name'=>$user->name,
            'email'=>$user->email,
            'provider'=>strtoupper($provider),
            'provider_id'=>$user->id
        ]);
    }
}
